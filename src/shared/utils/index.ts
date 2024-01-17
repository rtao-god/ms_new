export * from "./mediaQueries";
type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

export const GOOGLE_LIBRARIES: Libraries = ["places", "geometry"];
