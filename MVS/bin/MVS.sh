#!/bin/bash

export LD_LIBRARY_PATH=/opt/MVS/bin:/opt/MVS/lib/armhf

./MVS $1 $2
