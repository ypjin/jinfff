#!/bin/bash

echo "---"
echo "Start installing some tools..."
echo "(This bash script is run at npm preinstall.)"
echo "---"

apt-get install -qq tar bzip2 libaio1

apt-get install -y wget

echo "---"
echo "done installing additional tools!"
echo "---"