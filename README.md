# dsh-question-nav

Session question navigator for the DeepSeek Harness web GUI: a right-side
floating panel listing the current session's user questions, with a hover
full-text preview and click-to-jump (smooth scroll) to the matching message.

## Install

```sh
dsh plugin --profile web add file:/path/to/question-nav-plugin
```

Then restart the `dsh web` process. The plugin appears under
Settings → Plugins as `dsh-question-nav`.

## How it works

- Bundle patch (`cordis.patch.yml`) inserts one Loader row naming this
  package, so the client-modules scan picks up the `dsh.client` declaration
  and serves `lib/client.js` into `window.__DSH_BOOT__`.
- The browser half registers an additive entry in the `shell.overlay` slot
  (no shipped UI is replaced), reads the current session through the
  official `sessions.binding(id).session` face (`ConversationSnapshot`),
  and lists `user` / `steering` chat nodes.
- Jumping uses the conversation's stable `data-chat-anchor-key` DOM anchors
  and smooth-scrolls the conversation scrollport.
- All theme colors come from `--dsw-*` tokens, so light/dark themes apply
  automatically.

## Remove

```sh
dsh plugin --profile web remove dsh-question-nav
```
