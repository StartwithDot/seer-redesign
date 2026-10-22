#!/bin/sh
cd "$(dirname "$0")"
(sleep 1; open http://localhost:8800) &
python3 -m http.server 8800
