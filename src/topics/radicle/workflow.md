# Workflow

## Cloning

```sh
rad clone z3Cqe7gEqxdqkGsPSS7KnBwJBBu5s
```

Let's configure `git` for this cloned repository.

```sh
git config user.signingKey "$(rad self --ssh-key)"
git config gpg.ssh.allowedSignersFile .gitsigners
```

That way, I can keep my GPG key for non-Radicle repositories and other forges.

## Sync with GitHub

I always try to sync my Radicle repository with GitHub as much as possible in order to keep discoverabilitya about my projects and use GitHub Actions to deploy or release code.

Note that you have to add the output of `rad self --ssh-key` to your [GitHub SSH signing keys](https://github.com/settings/keys) to have your commits verified
with your Radicle SSH key.

Let's add our GitHub repository as a `push` for the `rad` remote. This is
probably bad practice, but it works for my workflow...

```sh
git remote set-url --add --push rad git@github.com:Vexcited/Rikka.git
```

We also need a way to fetch code from GitHub, note that this will also create a
`push` URL for `github` remote, just never **ever** use it.

```sh
git remote add github git@github.com:Vexcited/Rikka.git
```

Thanks to this setup, when a PR is merged on GitHub we can do the following.

```sh
# update our github remote
git fetch github

# merge github remote with our local copy
git merge github/main

# sync with radicle!
git push
```

## Troubleshooting

### `Couldn't find key in agent?`

If you ever try to commit something and you get the following error.

```
error: Couldn't find key in agent?
fatal: failed to write commit object
```

That means your Radicle key is not in your `ssh-agent`, you can check this by running `ssh-add -l`.

Now, if you're using Bitwarden SSH Agent, please look at the [Bitwarden Guide for Radicle](./bitwarden.md) instead.

Otherwise, you can run `rad auth` to use Radicle's SSH agent directly.

```terminal
$ rad auth
✓ Passphrase: ******************
✓ Radicle key added to ssh-agent
```

You can check again `ssh-add -l` and you should see your Radicle key here now!
