ui-copy target:
  #!/bin/bash
  if [ -z "{{target}}" ]; then
    echo "Error: Please provide the directory to copy as an argument."
    exit 1
  fi
  cp -r "../ui.mantine.dev/lib/{{target}}" "./src/components/"
  echo "Copied ../ui.mantine.dev/lib/{{target}} to ./src/components/{{target}}"
