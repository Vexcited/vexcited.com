# Machine ID

> <https://man7.org/linux/man-pages/man5/machine-id.5.html>

- Located at `/etc/machine-id`
- Can be regnerated with `systemd-machine-id-setup`

## Troubleshooting

### Cloning a virtual machine keeps the same IP on DHCP!

If you're configuring your machine's network with `/etc/systemd/network`
as in...

```
[Match]
Name=enp0s5

[Network]
DHCP=yes
MulticastDNS=yes
```

The issue is likely due to `systemd-networkd`'s DHCP client using the same `machine-id` or DUID (DHCP Unique Identifier) on both cloned machines, causing the DHCP server to assign them the same IP address.

```sh
sudo rm /etc/machine-id
sudo systemd-machine-id-setup
sudo systemctl restart systemd-networkd
```
