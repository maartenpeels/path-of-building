# MUST be run from the root directory of the project

# Parameters
TAG=$1 # Git tag to checkout

# Validate parameters
if [ -z "$TAG" ]; then
    echo "Usage: $0 <tag>"
    exit 1
fi

# Goto skilltree-export directory
cd data/skilltree || exit

# Check if head is already at the tag
if [ "$(git describe --tags --abbrev=0)" == "$TAG" ]; then
    echo "Already at tag $TAG"
else
    # Fetch the latest tags
    git fetch --tags

    # Check if the tag exists
    if [ -z "$(git tag -l $TAG)" ]; then
        echo "Tag $TAG not found in skilltree-export repository"
        exit 1
    fi

    # Checkout the tag
    git checkout $TAG
fi

# Copy the images
mkdir -p ../../src/assets/skill-tree/images
cp -r assets/* ../../src/assets/skill-tree/images

# Done
echo "Data fetch complete"
