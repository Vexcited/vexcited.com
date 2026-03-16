# Firewall

## Open ports

> Inspired by <https://gist.github.com/mrladeia/da43fc783610758c6dbcaba22b4f7acd>.

Go to Networking > Virtual cloud networks > (select your VCN) > Security > Default Security List, under Security Lists section > Security rules > Add Ingress Rules

- Source CIDR `0.0.0.0/0`
- Source Port Range : *leave empty for "All"*

Once done, go back to your VPS and edit the file `/etc/iptables/rules.v4` provided by Oracle.

Right below the line `-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT`, add the ports you want to open.
Let's say you want to open `80` and `443`, simply add:

```
-A INPUT -p tcp -m state --state NEW -m multiport --dports 80,443 -j ACCEPT
```

You can also add a single port using the following:

```
-A INPUT -p tcp -m state --state NEW -m tcp --dport 8776 -j ACCEPT
```

You can now either reboot or run `sudo /sbin/iptables-restore < /etc/iptables/rules.v4`.
