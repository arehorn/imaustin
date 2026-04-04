#!/bin/sh
export PATH="/opt/homebrew/bin:$PATH"
cd /Users/austin/Projects/austinrehorn-site-v2
exec node node_modules/.bin/astro dev
