#!/bin/bash

if [ -n "$(git status --porcelain)" ]; then git status; exit 1; else exit 0; fi
