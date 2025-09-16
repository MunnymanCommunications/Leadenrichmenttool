export interface Lead {
  name: string;
  role: string;
  email: string;
  phone: string;
  isPrimaryTarget?: boolean;
}

export interface GroundingChunkContent {
    // FIX: The `uri` property from the Gemini API can be optional. Making it optional here to match the source type and resolve the TypeScript error.
    uri?: string;
    // FIX: The `title` property from the Gemini API can be optional. Making it optional here for type consistency and robust handling in components.
    title?: string;
}

export interface GroundingChunk {
    web: GroundingChunkContent;
}
