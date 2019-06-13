import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data'

const entityMetadata: EntityMetadataMap = {
  Races: {},
  Ponies: {}
}

const pluralNames = {
  Ponies: 'Ponies',
  Races: 'Races'
}

export const DATA_CONFIG: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
}