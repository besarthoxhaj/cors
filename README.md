## CORS

Following is a simple explanation of CORS and how to deal with it, both server
and client side.

### Set up Hosts file

In order to play with CORS make sure to update your hosts file. A normal hosts
file looks something like this:

```
$ cat /etc/hosts

##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1         localhost
255.255.255.255   broadcasthost
::1               localhost
```

When the system does a DNS resolution will look at the right side and see if
your website url matches any. That's why typing `127.0.0.1` or `localhost` is
the same.
Go ahead and add this to the host database.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1         localhost cors.com
255.255.255.255   broadcasthost
::1               localhost
```

To make sure it worked, follow this instruction:

```bash
$ node server.js
> Server running!
# Open your browser and visit `localhost:5050` and check you see `CORS`
# Go to `cors.com:5050` and check you see the same `CORS`
```

### Simple

Open and keep the browser at `http://localhost:5050`. You should see different
buttons with different names, hold on don't click around yet.

Your domain or origin now is `http://localhost:5050`, while when you click
`Simple Not Allowed` you are sending a request to `http://cors.com:5050` which
as you may notice belongs to the `cors.com` domain or origin.

Now let's see what happens when you click `Simple Not Allowed`. Make sure to be
running the server i.e. `$ node server.js`.

Once clicked the browser makes a request to `http://cors.com:5050/api/notAllow`,
you can see this from the server output in the terminal:

```
$ node server.js
> Server running!
> Server Host cors.com:5050
> Serving GET /api/notAllow
> Origin http://localhost:5050
```

Notice how the request gets processed by the server and send back to the browser.
It never reaches our javascript because the browser parses the response header
from the server and notice there is not `Access-Control-Allow-Origin`. This is
the end of our request adventure.

## References

- Host:
- Origin:
- Url:
- Method:

## Resources
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
- https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
