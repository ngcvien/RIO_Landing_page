/** A small, decorative signal diagram; its stroke draws once on entry. */
export function EngineeringTrace() {
  return <svg className="engineering-trace" viewBox="0 0 360 130" fill="none" aria-hidden="true" focusable="false">
    <path className="trace-grid" d="M0 25H360M0 65H360M0 105H360M35 0V130M105 0V130M175 0V130M245 0V130M315 0V130" />
    <path className="trace-route" d="M0 90H55L90 55H145L185 95H235L285 35H360" />
    <path className="trace-signal" pathLength="1" d="M0 90H55L90 55H145L185 95H235L285 35H360" />
    <g className="trace-node trace-node-one"><circle cx="90" cy="55" r="8" /><circle cx="90" cy="55" r="2" /></g>
    <g className="trace-node trace-node-two"><circle cx="235" cy="95" r="8" /><circle cx="235" cy="95" r="2" /></g>
    <g className="trace-node trace-node-three"><circle cx="285" cy="35" r="8" /><circle cx="285" cy="35" r="2" /></g>
  </svg>;
}
