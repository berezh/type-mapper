import { MapFieldType } from "./field";

export interface MapConverter {
  convert: (source: any, destination: any) => void;
}

// export type MapPair<TSource, TDestination> = [(source: TSource) => any, (destination: TDestination) => any];

export type MapPair = [string, string, MapFieldType?];

export interface MapPairOptions {
  field: string;
  type: MapFieldType;
}
