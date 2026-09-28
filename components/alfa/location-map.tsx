"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapSite = {
  id: string;
  code: string;
  name: string;
  lat: number;
  lng: number;
};

// Standard OSM tiles, desaturated (and inverted in dark mode) in alfa.css on
// the tile pane only, so the map joins the single-chroma photo system while
// the gold markers above it stay untouched. Theme switches are pure CSS.
const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const ZOOM = 14;

/**
 * Leaflet touches `window` at import time, so it is loaded inside the effect
 * rather than at module scope. The map is created once; selection changes only
 * retarget the camera and swap marker state.
 */
export function LocationMap({
  sites,
  activeId,
  onSelect,
}: {
  sites: MapSite[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const markers = useRef(new Map<string, Marker>());
  const onSelectRef = useRef(onSelect);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  // --- Create map once ---------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !el.current) return;

      const first = sites.find((s) => s.id === activeId) ?? sites[0];
      const m = L.map(el.current, {
        center: [first.lat, first.lng],
        zoom: ZOOM,
        zoomControl: false,
        // Wheel zoom would hijack page scroll; one-finger drag would trap it
        // on phones. Both stay available via the controls and two fingers.
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        attributionControl: true,
      });
      L.control.zoom({ position: "topright", zoomInTitle: "Acercar", zoomOutTitle: "Alejar" }).addTo(m);
      m.attributionControl.setPrefix(false);

      const tiles = L.tileLayer(TILES, {
        attribution: ATTRIBUTION,
        maxZoom: 19,
      }).addTo(m);
      tiles.once("load", () => !cancelled && setReady(true));
      // Slow or blocked tile CDN: drop the overlay anyway so the markers and
      // controls stay usable instead of hiding behind a loading label.
      setTimeout(() => !cancelled && setReady(true), 4000);

      sites.forEach((s) => {
        const icon = L.divIcon({
          className: "alfa-pin-wrap",
          html: `<span class="alfa-pin" data-code="${s.code}"><span class="alfa-pin__ring"></span><span class="alfa-pin__core"></span></span>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });
        const mk = L.marker([s.lat, s.lng], {
          icon,
          title: s.name,
          alt: s.name,
          keyboard: true,
          riseOnHover: true,
        })
          .on("click", () => onSelectRef.current(s.id))
          .addTo(m);
        markers.current.set(s.id, mk);
      });

      map.current = m;
    })();

    const markerMap = markers.current;
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
      markerMap.clear();
    };
    // Sites are static module data; the map must not be rebuilt on selection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Retarget on selection ----------------------------------------------
  useEffect(() => {
    markers.current.forEach((mk, id) => {
      const node = mk.getElement()?.querySelector(".alfa-pin");
      node?.toggleAttribute("data-active", id === activeId);
      mk.setZIndexOffset(id === activeId ? 1000 : 0);
    });

    const m = map.current;
    const site = sites.find((s) => s.id === activeId);
    if (!m || !site) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      m.setView([site.lat, site.lng], ZOOM, { animate: false });
    } else {
      // The flight is the explanation: it shows how far apart the campus and
      // the airport hangar really are.
      m.flyTo([site.lat, site.lng], ZOOM, { duration: 1.4, easeLinearity: 0.2 });
    }
  }, [activeId, ready, sites]);

  return (
    <div className="relative h-full w-full">
      <div
        ref={el}
        role="region"
        aria-label="Mapa de sedes de ALFA 552"
        className="alfa-map h-full w-full"
      />
      <div
        aria-hidden
        data-ready={ready || undefined}
        className="alfa-map-loading mono pointer-events-none absolute inset-0 grid place-items-center bg-[var(--surface)] text-[11px] tracking-[0.16em] text-[var(--mid)]"
      >
        CARGANDO CARTA
      </div>
    </div>
  );
}
