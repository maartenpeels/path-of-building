export interface Tree {
    tree:                   string;
    classes:                Class[];
    alternate_ascendancies: AlternateAscendancyElement[];
    groups:                 { [key: string]: Group };
    nodes:                  { [key: string]: Node };
    extraImages:            { [key: string]: ExtraImage };
    jewelSlots:             number[];
    min_x:                  number;
    min_y:                  number;
    max_x:                  number;
    max_y:                  number;
    constants:              Constants;
    sprites:                Sprites;
    imageZoomLevels:        number[];
    points:                 Points;
}

export interface AlternateAscendancyElement {
    id:                 string;
    name:               string;
    flavourText?:       string;
    flavourTextColour?: string;
    flavourTextRect?:   FlavourTextRect;
}

export interface FlavourTextRect {
    x:      number;
    y:      number;
    width:  number;
    height: number;
}

export interface Class {
    name:         string;
    base_str:     number;
    base_dex:     number;
    base_int:     number;
    ascendancies: AlternateAscendancyElement[];
}

export interface Constants {
    classes:              Classes;
    characterAttributes:  CharacterAttributes;
    PSSCentreInnerRadius: number;
    skillsPerOrbit:       number[];
    orbitRadii:           number[];
}

export interface CharacterAttributes {
    Strength:     number;
    Dexterity:    number;
    Intelligence: number;
}

export interface Classes {
    StrDexIntClass: number;
    StrClass:       number;
    DexClass:       number;
    IntClass:       number;
    StrDexClass:    number;
    StrIntClass:    number;
    DexIntClass:    number;
}

export interface ExtraImage {
    x:     number;
    y:     number;
    image: string;
}

export interface Group {
    x:           number;
    y:           number;
    orbits:      number[];
    background?: GroupBackground;
    nodes:       string[];
    isProxy?:    boolean;
}

export interface GroupBackground {
    image:        Image;
    isHalfImage?: boolean;
}

export enum Image {
    PSGroupBackground1 = "PSGroupBackground1",
    PSGroupBackground2 = "PSGroupBackground2",
    PSGroupBackground3 = "PSGroupBackground3",
}

export interface Node {
    skill?:                  number;
    name?:                   string;
    icon?:                   string;
    isNotable?:              boolean;
    recipe?:                 Recipe[];
    stats?:                  string[];
    group?:                  number;
    orbit?:                  number;
    orbitIndex?:             number;
    out?:                    string[];
    in?:                     string[];
    reminderText?:           string[];
    isMastery?:              boolean;
    inactiveIcon?:           string;
    activeIcon?:             string;
    activeEffectImage?:      string;
    masteryEffects?:         MasteryEffect[];
    grantedStrength?:        number;
    ascendancyName?:         string;
    grantedDexterity?:       number;
    isAscendancyStart?:      boolean;
    isMultipleChoice?:       boolean;
    grantedIntelligence?:    number;
    isJewelSocket?:          boolean;
    expansionJewel?:         ExpansionJewel;
    grantedPassivePoints?:   number;
    isKeystone?:             boolean;
    flavourText?:            string[];
    isProxy?:                boolean;
    isMultipleChoiceOption?: boolean;
    isBlighted?:             boolean;
    classStartIndex?:        number;
}

export interface ExpansionJewel {
    size:    number;
    index:   number;
    proxy:   string;
    parent?: string;
}

export interface MasteryEffect {
    effect:        number;
    stats:         string[];
    reminderText?: string[];
}

export enum Recipe {
    AmberOil = "AmberOil",
    AzureOil = "AzureOil",
    BlackOil = "BlackOil",
    ClearOil = "ClearOil",
    CrimsonOil = "CrimsonOil",
    GoldenOil = "GoldenOil",
    IndigoOil = "IndigoOil",
    OpalescentOil = "OpalescentOil",
    SepiaOil = "SepiaOil",
    SilverOil = "SilverOil",
    TealOil = "TealOil",
    VerdantOil = "VerdantOil",
    VioletOil = "VioletOil",
}

export interface Points {
    totalPoints:      number;
    ascendancyPoints: number;
}

export interface Sprites {
    background:            { [key: string]: BackgroundValue };
    normalActive:          { [key: string]: AscendancyValue };
    notableActive:         { [key: string]: AscendancyValue };
    keystoneActive:        { [key: string]: AscendancyValue };
    normalInactive:        { [key: string]: AscendancyValue };
    notableInactive:       { [key: string]: AscendancyValue };
    keystoneInactive:      { [key: string]: AscendancyValue };
    mastery:               { [key: string]: AscendancyValue };
    masteryConnected:      { [key: string]: AscendancyValue };
    masteryActiveSelected: { [key: string]: AscendancyValue };
    masteryInactive:       { [key: string]: AscendancyValue };
    masteryActiveEffect:   { [key: string]: AscendancyValue };
    tattooActiveEffect:    { [key: string]: AscendancyValue };
    ascendancyBackground:  { [key: string]: AscendancyValue };
    azmeriBackground:      { [key: string]: AzmeriBackground };
    azmeri:                { [key: string]: AscendancyValue };
    ascendancy:            { [key: string]: AscendancyValue };
    charm:                 { [key: string]: Charm };
    startNode:             { [key: string]: StartNode };
    groupBackground:       { [key: string]: GroupBackgroundValue };
    frame:                 { [key: string]: AscendancyValue };
    jewel:                 { [key: string]: AscendancyValue };
    line:                  { [key: string]: AscendancyValue };
    jewelRadius:           JewelRadius;
}

export interface AscendancyValue {
    filename: string;
    w:        number;
    h:        number;
    coords:   { [key: string]: Coord };
}

export interface Coord {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface AzmeriBackground {
    filename: string;
    w:        number;
    h:        number;
    coords:   AzmeriBackgroundCoords;
}

export interface AzmeriBackgroundCoords {
    ClassesWarlock:   Coord;
    ClassesWarden:    Coord;
    ClassesPrimalist: Coord;
}

export interface BackgroundValue {
    filename: string;
    w:        number;
    h:        number;
    coords:   BackgroundCoords;
}

export interface BackgroundCoords {
    Background2: Coord;
}

export interface Charm {
    filename: string;
    w:        number;
    h:        number;
    coords:   CharmCoords;
}

export interface CharmCoords {
    CharmSocketActiveStr: Coord;
    CharmSocketActiveInt: Coord;
    CharmSocketActiveDex: Coord;
}

export interface GroupBackgroundValue {
    filename: string;
    w:        number;
    h:        number;
    coords:   GroupBackgroundCoords;
}

export interface GroupBackgroundCoords {
    PSGroupBackground3:          Coord;
    GroupBackgroundLargeHalfAlt: Coord;
    PSGroupBackground2:          Coord;
    GroupBackgroundMediumAlt:    Coord;
    PSGroupBackground1:          Coord;
    GroupBackgroundSmallAlt:     Coord;
}

export interface JewelRadius {
    "1": AscendancyValue;
}

export interface StartNode {
    filename: string;
    w:        number;
    h:        number;
    coords:   StartNodeCoords;
}

export interface StartNodeCoords {
    centerwitch:                   Coord;
    centertemplar:                 Coord;
    centershadow:                  Coord;
    centerscion:                   Coord;
    centerranger:                  Coord;
    centermarauder:                Coord;
    centerduelist:                 Coord;
    PSStartNodeBackgroundInactive: Coord;
}
