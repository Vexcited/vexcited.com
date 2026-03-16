# Bitwarden for Radicle

Since we're already using the SSH agent from Bitwarden, how can we use Radicle there ? Also, can we sync the private key from Radicle in Bitwarden ?

## Storing Radicle SSH key

Radicle will store its keys in the `~/.radicle/keys/` directory. You can import `~/.radicle/keys/radicle` content inside Bitwarden.

Now when you'll run `rad auth`, it'll say `Radicle key already in ssh-agent` which means you added the key to Bitwarden successfully. You won't ever need to run `rad auth` again from now on.

## Moving the keys outside of Radicle

Now, your key is inside Bitwarden but it's still in the `~/.radicle/keys/radicle` directory on your desktop which is not optimal. You might want to delete it and let Bitwarden handle everything for you.

Sadly, we can't do this for now, I'll update this section whenever it might get possible.
