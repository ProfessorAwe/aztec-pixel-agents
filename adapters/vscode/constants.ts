// ── User-Level Layout Persistence (re-exports from server/) ──
export {
  CONFIG_FILE_NAME,
  LAYOUT_FILE_DIR,
  LAYOUT_FILE_NAME,
  LAYOUT_FILE_POLL_INTERVAL_MS,
  LAYOUT_REVISION_KEY,
} from '../../server/src/constants.js';

// ── Settings Persistence (VS Code globalState keys) ─────────
export const GLOBAL_KEY_SOUND_ENABLED = 'aztec-agents.soundEnabled';
export const GLOBAL_KEY_LAST_SEEN_VERSION = 'aztec-agents.lastSeenVersion';
export const GLOBAL_KEY_ALWAYS_SHOW_LABELS = 'aztec-agents.alwaysShowLabels';
export const GLOBAL_KEY_WATCH_ALL_SESSIONS = 'aztec-agents.watchAllSessions';
export const GLOBAL_KEY_HOOKS_ENABLED = 'aztec-agents.hooksEnabled';
export const GLOBAL_KEY_HOOKS_INFO_SHOWN = 'aztec-agents.hooksInfoShown';

// ── VS Code Settings (contributes.configuration keys) ───────
export const CONFIG_KEY_AUTO_SHOW_PANEL = 'aztec-agents.autoShowPanel';
export const CONFIG_KEY_AUTO_SPAWN_AGENT = 'aztec-agents.autoSpawnAgent';

// ── VS Code Identifiers ─────────────────────────────────────
export const VIEW_ID = 'aztec-agents.panelView';
export const COMMAND_SHOW_PANEL = 'aztec-agents.showPanel';
export const COMMAND_EXPORT_DEFAULT_LAYOUT = 'aztec-agents.exportDefaultLayout';
