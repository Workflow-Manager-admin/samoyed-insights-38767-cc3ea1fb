#!/bin/bash
cd /home/kavia/workspace/code-generation/samoyed-insights-38767-cc3ea1fb/samoyed_insights_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

