/**
 * Session question navigator — host half.
 *
 * Pure UI plugin: the empty apply exists so the package appears in the host
 * composition / Loader (and therefore in Settings → Plugins); the browser
 * half ships via exports["./client"], discovered through the package.json
 * `dsh.client` declaration.
 */
export function apply() {}
