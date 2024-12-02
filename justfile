ui-copy target:
  #!/bin/bash
  if [ -z "{{target}}" ]; then
    echo "Error: Please provide the directory to copy as an argument."
    exit 1
  fi
  cp -r "../ui.mantine.dev/lib/{{target}}" "./src/components/"
  echo "Copied ../ui.mantine.dev/lib/{{target}} to ./src/components/{{target}}"

component component_name:
  #!/bin/bash
  if [ -z "{{component_name}}" ]; then
    echo "Error: Please provide the component name."
    exit 1
  fi
  mkdir -p src/components/{{component_name}} && \
  touch src/components/{{component_name}}/{{component_name}}.tsx && \
  touch src/components/{{component_name}}/{{component_name}}.module.css
