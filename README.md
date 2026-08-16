# deepseek-harness-plugins

A collection of third-party plugins for
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), each
published to npm as its own package and installable with the official CLI:

```sh
dsh plugin --profile <name> add <package>
```

## Plugins

| Plugin | npm | Install |
| --- | --- | --- |
| [dsh-question-nav](./plugins/dsh-question-nav) | `dsh-question-nav` | `dsh plugin --profile web add dsh-question-nav` |

## Repository layout

Each plugin lives in `plugins/<npm-package-name>/` and is an independent
npm package that declares `dsh.bundle` (a composition patch inserting its
own row) and/or `dsh.client` (the web browser half served into
`window.__DSH_BOOT__`).

```text
plugins/
└── <npm-package-name>/
    ├── package.json        # dsh.bundle + dsh.client declarations
    ├── cordis.patch.yml    # the row(s) this plugin inserts
    ├── lib/index.js        # host half (may be empty)
    ├── lib/client.js       # browser half (__ModuleLoader__ bundle)
    └── README.md
```

## Releasing

Tags drive publishing. Tag a version of one plugin with
`<npm-package-name>-v<version>`, e.g.:

```sh
git tag dsh-question-nav-v0.1.0
git push origin dsh-question-nav-v0.1.0
```

The CI pipeline (`push` on `*-v*` tags):

1. resolves the plugin directory and version from the tag,
2. verifies the directory exists and the tag matches its `package.json`
   (`name` and `version`),
3. preflights the published contents with `npm pack --dry-run`,
4. publishes that package to npm using the `NPM_TOKEN` secret,
5. creates a GitHub Release.

## Adding a new plugin

1. Create `plugins/<new-package>/` with its own `package.json`, patch file,
   host/client halves, and README.
2. Commit, then tag and push `<new-package>-v0.1.0` to publish.
