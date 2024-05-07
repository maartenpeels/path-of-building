import json

INPUT_FILE = 'data/skilltree-export/data.json'
OUTPUT_FILE = 'src/assets/skill-tree/data.json'


def transform_sprite(sprite):
    url = sprite["filename"]
    # https://web.poecdn.com/image/passive-skill/jewel-radius.png?69b523b1
    filename = url.split('/')[-1].split('?')[0]
    sprite["filename"] = filename


def transform_sprites(data):
    zoom_levels = data["imageZoomLevels"]
    for sprite_name in data["sprites"]:
        sprite = data["sprites"][sprite_name]

        if len(sprite) == 4:
            for zoom_level in zoom_levels:
                transform_sprite(sprite[str(zoom_level)])
        else:
            if "1" in sprite:
                transform_sprite(sprite["1"])

    return data


if __name__ == "__main__":
    with open(INPUT_FILE, 'r') as f:
        data = json.load(f)

    transform_sprites(data)

    with open(OUTPUT_FILE, 'w') as f:
        json.dump(data, f, indent=4)


