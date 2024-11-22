#!/bin/bash
curl -fsSL https://deno.land/install.sh | sh
export PATH="$HOME/.deno/bin:$PATH"
deno run --allow-net --allow-read server.ts & 
exit 0