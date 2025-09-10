ts-todo-list
=================

todolist


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ts-todo-list.svg)](https://npmjs.org/package/ts-todo-list)
[![Downloads/week](https://img.shields.io/npm/dw/ts-todo-list.svg)](https://npmjs.org/package/ts-todo-list)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ts-todo-list
$ ts-todo-list COMMAND
running command...
$ ts-todo-list (--version)
ts-todo-list/0.0.0 darwin-arm64 node-v24.2.0
$ ts-todo-list --help [COMMAND]
USAGE
  $ ts-todo-list COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ts-todo-list hello PERSON`](#ts-todo-list-hello-person)
* [`ts-todo-list hello world`](#ts-todo-list-hello-world)
* [`ts-todo-list help [COMMAND]`](#ts-todo-list-help-command)
* [`ts-todo-list plugins`](#ts-todo-list-plugins)
* [`ts-todo-list plugins add PLUGIN`](#ts-todo-list-plugins-add-plugin)
* [`ts-todo-list plugins:inspect PLUGIN...`](#ts-todo-list-pluginsinspect-plugin)
* [`ts-todo-list plugins install PLUGIN`](#ts-todo-list-plugins-install-plugin)
* [`ts-todo-list plugins link PATH`](#ts-todo-list-plugins-link-path)
* [`ts-todo-list plugins remove [PLUGIN]`](#ts-todo-list-plugins-remove-plugin)
* [`ts-todo-list plugins reset`](#ts-todo-list-plugins-reset)
* [`ts-todo-list plugins uninstall [PLUGIN]`](#ts-todo-list-plugins-uninstall-plugin)
* [`ts-todo-list plugins unlink [PLUGIN]`](#ts-todo-list-plugins-unlink-plugin)
* [`ts-todo-list plugins update`](#ts-todo-list-plugins-update)

## `ts-todo-list hello PERSON`

Say hello

```
USAGE
  $ ts-todo-list hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ ts-todo-list hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/rikinyan/ts-todo-list/blob/v0.0.0/src/commands/hello/index.ts)_

## `ts-todo-list hello world`

Say hello world

```
USAGE
  $ ts-todo-list hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ts-todo-list hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/rikinyan/ts-todo-list/blob/v0.0.0/src/commands/hello/world.ts)_

## `ts-todo-list help [COMMAND]`

Display help for ts-todo-list.

```
USAGE
  $ ts-todo-list help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ts-todo-list.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `ts-todo-list plugins`

List installed plugins.

```
USAGE
  $ ts-todo-list plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed pluginss.

EXAMPLES
  $ ts-todo-list plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `ts-todo-list plugins add PLUGIN`

Installs a plugin into ts-todo-list.

```
USAGE
  $ ts-todo-list plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ts-todo-list.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TS_TODO_LIST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TS_TODO_LIST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ts-todo-list plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ts-todo-list plugins add myplugin

  Install a plugin from a github url.

    $ ts-todo-list plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ts-todo-list plugins add someuser/someplugin
```

## `ts-todo-list plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ts-todo-list plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ts-todo-list plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `ts-todo-list plugins install PLUGIN`

Installs a plugin into ts-todo-list.

```
USAGE
  $ ts-todo-list plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ts-todo-list.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TS_TODO_LIST_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TS_TODO_LIST_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ts-todo-list plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ts-todo-list plugins install myplugin

  Install a plugin from a github url.

    $ ts-todo-list plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ts-todo-list plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `ts-todo-list plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ ts-todo-list plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ts-todo-list plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `ts-todo-list plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ts-todo-list plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts-todo-list plugins unlink
  $ ts-todo-list plugins remove

EXAMPLES
  $ ts-todo-list plugins remove myplugin
```

## `ts-todo-list plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ts-todo-list plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `ts-todo-list plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ts-todo-list plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts-todo-list plugins unlink
  $ ts-todo-list plugins remove

EXAMPLES
  $ ts-todo-list plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `ts-todo-list plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ts-todo-list plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts-todo-list plugins unlink
  $ ts-todo-list plugins remove

EXAMPLES
  $ ts-todo-list plugins unlink myplugin
```

## `ts-todo-list plugins update`

Update installed plugins.

```
USAGE
  $ ts-todo-list plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->
