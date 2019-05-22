#!/bin/bash
ENDPOINT=http://graphiql.s3-website-us-east-1.amazonaws.com
BUCKET=graphiql.graphapp.io

# 1. Build it
npm run build

# 2. Publish to public npm repo where Neo4j Desktop can find it.
npm publish

# 3. Host on a static Amazon S3 site.
s3cmd put --recursive -P dist/* s3://$BUCKET
