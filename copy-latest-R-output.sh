#!/usr/bin/env bash

set -euo pipefail

# Check that exactly one argument was supplied.
if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <version>"
    echo "Example: $0 4.0"
    exit 1
fi

version="$1"

# Prevent the argument from being interpreted as a path.
if [[ -z "$version" || "$version" == "." || "$version" == ".." || "$version" == */* ]]; then
    echo "Error: version must be a directory name, such as 4.0"
    exit 1
fi

source_dir="$PWD/../../../../../../R/output"
destination_dir="$PWD/$version"

if [[ ! -d "$source_dir" ]]; then
    echo "Error: source directory does not exist:"
    echo "  $source_dir"
    exit 1
fi

# Find immediate subdirectories and select the last one alphabetically.
mapfile -t subdirectories < <(
    find "$source_dir" -mindepth 1 -maxdepth 1 -type d -print | LC_ALL=C sort
)

if [[ ${#subdirectories[@]} -eq 0 ]]; then
    echo "Error: no subdirectories found in:"
    echo "  $source_dir"
    exit 1
fi

latest_subdirectory="${subdirectories[${#subdirectories[@]} - 1]}"

# Create the destination directory and copy all contents, including hidden files.
mkdir -p "$destination_dir"
cp -a "$latest_subdirectory/." "$destination_dir/"

echo "Copied contents of:"
echo "  $latest_subdirectory"
echo "to:"
echo "  $destination_dir"