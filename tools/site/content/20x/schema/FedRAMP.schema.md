# FedRAMP Machine Readable Requirements Schema

**Title:** FedRAMP Machine Readable Requirements Schema

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | No               |
| **Additional properties** | Any type allowed |

**Description:** This schema defines the structure for FedRAMP Machine Readable Requirements documents. It is currently in rapid development and may change frequently.

| Property         | Pattern | Type   | Deprecated | Definition | Title/Description                                                                                   |
| ---------------- | ------- | ------ | ---------- | ---------- | --------------------------------------------------------------------------------------------------- |
| + [info](#info ) | No      | object | No         | -          | Information about the document including version information, general purpose, and other meta data. |
| - [FRA](#FRA )   | No      | object | No         | -          | FedRAMP Technical Assistance Documents. Each document is identified by a 3 character abbreviation.  |
| - [FRD](#FRD )   | No      | object | No         | -          | FedRAMP Definitions. Each document is identified by a 3 character abbreviation.                     |
| - [FRR](#FRR )   | No      | object | No         | -          | -                                                                                                   |
| - [KSI](#KSI )   | No      | object | No         | -          | -                                                                                                   |

## <a name="info"></a>1. Property `FedRAMP Machine Readable Requirements Schema > info`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

**Description:** Information about the document including version information, general purpose, and other meta data.

| Property                                    | Pattern | Type                      | Deprecated | Definition | Title/Description                                                                                 |
| ------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------- |
| + [name](#info_name )                       | No      | string                    | No         | -          | The name of the document or policy                                                                |
| + [short_name](#info_short_name )           | No      | string                    | No         | -          | 3 character abbreviation assigned to this document. Used as part of the key for included objects. |
| + [current_release](#info_current_release ) | No      | string                    | No         | -          | The currently official release. May not always be the latest version.                             |
| + [types](#info_types )                     | No      | array of enum (of string) | No         | -          | The types of objects included in the document. See IDENTIFIERS.md for explanations.               |
| + [releases](#info_releases )               | No      | array of object           | No         | -          | An array of both past and future releases of this document.                                       |
| + [front_matter](#info_front_matter )       | No      | object                    | No         | -          | Meta data about the document                                                                      |

### <a name="info_name"></a>1.1. Property `FedRAMP Machine Readable Requirements Schema > info > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** The name of the document or policy

### <a name="info_short_name"></a>1.2. Property `FedRAMP Machine Readable Requirements Schema > info > short_name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** 3 character abbreviation assigned to this document. Used as part of the key for included objects.

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[A-Z]{3}$``` [Test](https://regex101.com/?regex=%5E%5BA-Z%5D%7B3%7D%24) |

### <a name="info_current_release"></a>1.3. Property `FedRAMP Machine Readable Requirements Schema > info > current_release`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** The currently official release. May not always be the latest version.

| Restrictions                      |                                                                                                                                                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^\d{2}\.\d{2}[A-Z](?:\s?DRAFT)?$``` [Test](https://regex101.com/?regex=%5E%5Cd%7B2%7D%5C.%5Cd%7B2%7D%5BA-Z%5D%28%3F%3A%5Cs%3FDRAFT%29%3F%24) |

### <a name="info_types"></a>1.4. Property `FedRAMP Machine Readable Requirements Schema > info > types`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

**Description:** The types of objects included in the document. See IDENTIFIERS.md for explanations.

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be  | Description |
| -------------------------------- | ----------- |
| [types items](#info_types_items) | -           |

#### <a name="info_types_items"></a>1.4.1. FedRAMP Machine Readable Requirements Schema > info > types > types items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "FRR"
* "FRD"
* "FRA"
* "KSI"
* "FRB"

### <a name="info_releases"></a>1.5. Property `FedRAMP Machine Readable Requirements Schema > info > releases`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

**Description:** An array of both past and future releases of this document.

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be        | Description                         |
| -------------------------------------- | ----------------------------------- |
| [releases items](#info_releases_items) | A specific release or release draft |

#### <a name="info_releases_items"></a>1.5.1. FedRAMP Machine Readable Requirements Schema > info > releases > releases items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

**Description:** A specific release or release draft

| Property                                                 | Pattern | Type            | Deprecated | Definition | Title/Description                                                                                                   |
| -------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| + [id](#info_releases_items_id )                         | No      | string          | No         | -          | Unique identifier for the release in the format ##.##A. 'draft' may be appended to denote future releases.          |
| + [published_date](#info_releases_items_published_date ) | No      | string or null  | No         | -          | A valid date string indicating the date that the changes in this release were published, or null for draft releases |
| + [description](#info_releases_items_description )       | No      | string          | No         | -          | Description of the release                                                                                          |
| + [public_comment](#info_releases_items_public_comment ) | No      | boolean         | No         | -          | Indicates if the release was made available for public comment.                                                     |
| + [effective](#info_releases_items_effective )           | No      | object          | No         | -          | collection of objects that describe when the release will be effective for specific FedRAMP authorization paths.    |
| - [related_rfcs](#info_releases_items_related_rfcs )     | No      | array of object | No         | -          | Requests for Comment related to this specific release.                                                              |

##### <a name="info_releases_items_id"></a>1.5.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** Unique identifier for the release in the format ##.##A. 'draft' may be appended to denote future releases.

| Restrictions                      |                                                                                                                                                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^\d{2}\.\d{2}[A-Z](?:\s?DRAFT)?$``` [Test](https://regex101.com/?regex=%5E%5Cd%7B2%7D%5C.%5Cd%7B2%7D%5BA-Z%5D%28%3F%3A%5Cs%3FDRAFT%29%3F%24) |

##### <a name="info_releases_items_published_date"></a>1.5.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > published_date`

|              |                  |
| ------------ | ---------------- |
| **Type**     | `string or null` |
| **Required** | Yes              |
| **Format**   | `date`           |

**Description:** A valid date string indicating the date that the changes in this release were published, or null for draft releases

##### <a name="info_releases_items_description"></a>1.5.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > description`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** Description of the release

##### <a name="info_releases_items_public_comment"></a>1.5.1.4. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > public_comment`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

**Description:** Indicates if the release was made available for public comment.

##### <a name="info_releases_items_effective"></a>1.5.1.5. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

**Description:** collection of objects that describe when the release will be effective for specific FedRAMP authorization paths.

| Property                                       | Pattern | Type   | Deprecated | Definition                | Title/Description                                                                  |
| ---------------------------------------------- | ------- | ------ | ---------- | ------------------------- | ---------------------------------------------------------------------------------- |
| - [20x](#info_releases_items_effective_20x )   | No      | object | No         | In #/$defs/release_target | When this release will be effective for CSPs using the 20x authorization program.  |
| - [Rev5](#info_releases_items_effective_Rev5 ) | No      | object | No         | In #/$defs/release_target | When this release will be effective for CSPs using the Rev5 authorization program. |

###### <a name="info_releases_items_effective_20x"></a>1.5.1.5.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x`

|                           |                        |
| ------------------------- | ---------------------- |
| **Type**                  | `object`               |
| **Required**              | No                     |
| **Additional properties** | Not allowed            |
| **Defined in**            | #/$defs/release_target |

**Description:** When this release will be effective for CSPs using the 20x authorization program.

| Property                                                                   | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| - [timeline](#info_releases_items_effective_20x_timeline )                 | No      | object          | No         | -          | -                 |
| - [specific_release](#info_releases_items_effective_20x_specific_release ) | No      | string          | No         | -          | -                 |
| - [comments](#info_releases_items_effective_20x_comments )                 | No      | array of string | No         | -          | -                 |

###### <a name="info_releases_items_effective_20x_timeline"></a>1.5.1.5.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                    | Pattern | Type   | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| - [pilot](#info_releases_items_effective_20x_timeline_pilot )               | No      | object | No         | -          | -                 |
| - [closed_beta](#info_releases_items_effective_20x_timeline_closed_beta )   | No      | object | No         | -          | -                 |
| - [wide_release](#info_releases_items_effective_20x_timeline_wide_release ) | No      | object | No         | -          | -                 |

###### <a name="info_releases_items_effective_20x_timeline_pilot"></a>1.5.1.5.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > pilot`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                      | Pattern | Type   | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_20x_timeline_pilot_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_20x_timeline_pilot_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_20x_timeline_pilot_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_20x_timeline_pilot_start_date"></a>1.5.1.5.1.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > pilot > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_pilot_designator"></a>1.5.1.5.1.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > pilot > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_pilot_comment"></a>1.5.1.5.1.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > pilot > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_closed_beta"></a>1.5.1.5.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > closed_beta`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                            | Pattern | Type   | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_20x_timeline_closed_beta_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_20x_timeline_closed_beta_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_20x_timeline_closed_beta_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_20x_timeline_closed_beta_start_date"></a>1.5.1.5.1.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > closed_beta > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_closed_beta_designator"></a>1.5.1.5.1.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > closed_beta > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_closed_beta_comment"></a>1.5.1.5.1.1.2.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > closed_beta > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_wide_release"></a>1.5.1.5.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > wide_release`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                             | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------ | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_20x_timeline_wide_release_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_20x_timeline_wide_release_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_20x_timeline_wide_release_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_20x_timeline_wide_release_start_date"></a>1.5.1.5.1.1.3.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > wide_release > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_wide_release_designator"></a>1.5.1.5.1.1.3.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > wide_release > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_timeline_wide_release_comment"></a>1.5.1.5.1.1.3.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > timeline > wide_release > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_20x_specific_release"></a>1.5.1.5.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > specific_release`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions                      |                                                                                                                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^(20x\|R5)\.[A-Z]{3}\.((P\|B)\d+\|WR)\.\d{2}\.\d{2}[A-Z]$``` [Test](https://regex101.com/?regex=%5E%2820x%7CR5%29%5C.%5BA-Z%5D%7B3%7D%5C.%28%28P%7CB%29%5Cd%2B%7CWR%29%5C.%5Cd%7B2%7D%5C.%5Cd%7B2%7D%5BA-Z%5D%24) |

###### <a name="info_releases_items_effective_20x_comments"></a>1.5.1.5.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > comments`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                     | Description |
| ------------------------------------------------------------------- | ----------- |
| [comments items](#info_releases_items_effective_20x_comments_items) | -           |

###### <a name="info_releases_items_effective_20x_comments_items"></a>1.5.1.5.1.3.1. FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > 20x > comments > comments items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5"></a>1.5.1.5.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5`

|                           |                        |
| ------------------------- | ---------------------- |
| **Type**                  | `object`               |
| **Required**              | No                     |
| **Additional properties** | Not allowed            |
| **Defined in**            | #/$defs/release_target |

**Description:** When this release will be effective for CSPs using the Rev5 authorization program.

| Property                                                                    | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| - [timeline](#info_releases_items_effective_Rev5_timeline )                 | No      | object          | No         | -          | -                 |
| - [specific_release](#info_releases_items_effective_Rev5_specific_release ) | No      | string          | No         | -          | -                 |
| - [comments](#info_releases_items_effective_Rev5_comments )                 | No      | array of string | No         | -          | -                 |

###### <a name="info_releases_items_effective_Rev5_timeline"></a>1.5.1.5.2.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                     | Pattern | Type   | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| - [pilot](#info_releases_items_effective_Rev5_timeline_pilot )               | No      | object | No         | -          | -                 |
| - [closed_beta](#info_releases_items_effective_Rev5_timeline_closed_beta )   | No      | object | No         | -          | -                 |
| - [wide_release](#info_releases_items_effective_Rev5_timeline_wide_release ) | No      | object | No         | -          | -                 |

###### <a name="info_releases_items_effective_Rev5_timeline_pilot"></a>1.5.1.5.2.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > pilot`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                       | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------ | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_Rev5_timeline_pilot_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_Rev5_timeline_pilot_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_Rev5_timeline_pilot_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_Rev5_timeline_pilot_start_date"></a>1.5.1.5.2.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > pilot > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_pilot_designator"></a>1.5.1.5.2.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > pilot > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_pilot_comment"></a>1.5.1.5.2.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > pilot > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_closed_beta"></a>1.5.1.5.2.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > closed_beta`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                             | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------ | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_Rev5_timeline_closed_beta_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_Rev5_timeline_closed_beta_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_Rev5_timeline_closed_beta_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_Rev5_timeline_closed_beta_start_date"></a>1.5.1.5.2.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > closed_beta > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_closed_beta_designator"></a>1.5.1.5.2.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > closed_beta > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_closed_beta_comment"></a>1.5.1.5.2.1.2.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > closed_beta > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_wide_release"></a>1.5.1.5.2.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > wide_release`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                              | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| - [start_date](#info_releases_items_effective_Rev5_timeline_wide_release_start_date ) | No      | string | No         | -          | -                 |
| - [designator](#info_releases_items_effective_Rev5_timeline_wide_release_designator ) | No      | string | No         | -          | -                 |
| - [comment](#info_releases_items_effective_Rev5_timeline_wide_release_comment )       | No      | string | No         | -          | -                 |

###### <a name="info_releases_items_effective_Rev5_timeline_wide_release_start_date"></a>1.5.1.5.2.1.3.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > wide_release > start_date`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_wide_release_designator"></a>1.5.1.5.2.1.3.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > wide_release > designator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_timeline_wide_release_comment"></a>1.5.1.5.2.1.3.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > timeline > wide_release > comment`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="info_releases_items_effective_Rev5_specific_release"></a>1.5.1.5.2.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > specific_release`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions                      |                                                                                                                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^(20x\|R5)\.[A-Z]{3}\.((P\|B)\d+\|WR)\.\d{2}\.\d{2}[A-Z]$``` [Test](https://regex101.com/?regex=%5E%2820x%7CR5%29%5C.%5BA-Z%5D%7B3%7D%5C.%28%28P%7CB%29%5Cd%2B%7CWR%29%5C.%5Cd%7B2%7D%5C.%5Cd%7B2%7D%5BA-Z%5D%24) |

###### <a name="info_releases_items_effective_Rev5_comments"></a>1.5.1.5.2.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > comments`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [comments items](#info_releases_items_effective_Rev5_comments_items) | -           |

###### <a name="info_releases_items_effective_Rev5_comments_items"></a>1.5.1.5.2.3.1. FedRAMP Machine Readable Requirements Schema > info > releases > releases items > effective > Rev5 > comments > comments items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

##### <a name="info_releases_items_related_rfcs"></a>1.5.1.6. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

**Description:** Requests for Comment related to this specific release.

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                               | Description |
| ------------------------------------------------------------- | ----------- |
| [related_rfcs items](#info_releases_items_related_rfcs_items) | -           |

###### <a name="info_releases_items_related_rfcs_items"></a>1.5.1.6.1. FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                    | Pattern | Type           | Deprecated | Definition | Title/Description                                  |
| --------------------------------------------------------------------------- | ------- | -------------- | ---------- | ---------- | -------------------------------------------------- |
| + [start_date](#info_releases_items_related_rfcs_items_start_date )         | No      | string or null | No         | -          | Date the RFC was opened or null                    |
| + [end_date](#info_releases_items_related_rfcs_items_end_date )             | No      | string or null | No         | -          | Date the RFC was closed or null                    |
| + [id](#info_releases_items_related_rfcs_items_id )                         | No      | string         | No         | -          | RFC unique ID. Usually a 4 digit number like 0015. |
| + [url](#info_releases_items_related_rfcs_items_url )                       | No      | string         | No         | -          | The URL for the RFC                                |
| + [discussion_url](#info_releases_items_related_rfcs_items_discussion_url ) | No      | string         | No         | -          | URL for the github feedback on he RFC.             |
| + [short_name](#info_releases_items_related_rfcs_items_short_name )         | No      | string         | No         | -          | Abbreviation for the RFC                           |
| + [full_name](#info_releases_items_related_rfcs_items_full_name )           | No      | string         | No         | -          | Full title of the RFC                              |

###### <a name="info_releases_items_related_rfcs_items_start_date"></a>1.5.1.6.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > start_date`

|              |                  |
| ------------ | ---------------- |
| **Type**     | `string or null` |
| **Required** | Yes              |
| **Format**   | `date`           |

**Description:** Date the RFC was opened or null

###### <a name="info_releases_items_related_rfcs_items_end_date"></a>1.5.1.6.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > end_date`

|              |                  |
| ------------ | ---------------- |
| **Type**     | `string or null` |
| **Required** | Yes              |
| **Format**   | `date`           |

**Description:** Date the RFC was closed or null

###### <a name="info_releases_items_related_rfcs_items_id"></a>1.5.1.6.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** RFC unique ID. Usually a 4 digit number like 0015.

###### <a name="info_releases_items_related_rfcs_items_url"></a>1.5.1.6.1.4. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Format**   | `uri`    |

**Description:** The URL for the RFC

###### <a name="info_releases_items_related_rfcs_items_discussion_url"></a>1.5.1.6.1.5. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > discussion_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Format**   | `uri`    |

**Description:** URL for the github feedback on he RFC.

###### <a name="info_releases_items_related_rfcs_items_short_name"></a>1.5.1.6.1.6. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > short_name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** Abbreviation for the RFC

###### <a name="info_releases_items_related_rfcs_items_full_name"></a>1.5.1.6.1.7. Property `FedRAMP Machine Readable Requirements Schema > info > releases > releases items > related_rfcs > related_rfcs items > full_name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** Full title of the RFC

### <a name="info_front_matter"></a>1.6. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

**Description:** Meta data about the document

| Property                                                     | Pattern | Type            | Deprecated | Definition | Title/Description                                                                                                                                  |
| ------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| - [authority](#info_front_matter_authority )                 | No      | array of object | No         | -          | An array for references to specific laws, OMB Memos, or other regulatory documentation defining the legal authority behind the documented standard |
| + [purpose](#info_front_matter_purpose )                     | No      | string          | No         | -          | The purpose of the document                                                                                                                        |
| - [expected_outcomes](#info_front_matter_expected_outcomes ) | No      | array of string | No         | -          | The expected outcomes of the document                                                                                                              |

#### <a name="info_front_matter_authority"></a>1.6.1. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

**Description:** An array for references to specific laws, OMB Memos, or other regulatory documentation defining the legal authority behind the documented standard

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                       | Description                                                                                                                                     |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [authority items](#info_front_matter_authority_items) | A specific reference to a law, OMB Memo, or other regulatory documentation defining one of the legal authorities behind the documented standard |

##### <a name="info_front_matter_authority_items"></a>1.6.1.1. FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

**Description:** A specific reference to a law, OMB Memo, or other regulatory documentation defining one of the legal authorities behind the documented standard

| Property                                                               | Pattern | Type   | Deprecated | Definition | Title/Description                                                               |
| ---------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ------------------------------------------------------------------------------- |
| + [reference](#info_front_matter_authority_items_reference )           | No      | string | No         | -          | The name of the referenced law, OMB Memo, or other regulatory documentation     |
| + [reference_url](#info_front_matter_authority_items_reference_url )   | No      | string | No         | -          | Link to the law, OMB Memo, or other regulatory documentation                    |
| + [description](#info_front_matter_authority_items_description )       | No      | string | No         | -          | Relevent text from the law, OMB Memo, or other regulatory documentation         |
| - [delegation](#info_front_matter_authority_items_delegation )         | No      | string | No         | -          | The role or organization to which the referenced authority is assigned.         |
| - [delegation_url](#info_front_matter_authority_items_delegation_url ) | No      | string | No         | -          | Link to the role or organization to which the referenced authority is assigned. |

###### <a name="info_front_matter_authority_items_reference"></a>1.6.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** The name of the referenced law, OMB Memo, or other regulatory documentation

###### <a name="info_front_matter_authority_items_reference_url"></a>1.6.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |
| **Format**   | `uri`    |

**Description:** Link to the law, OMB Memo, or other regulatory documentation

###### <a name="info_front_matter_authority_items_description"></a>1.6.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items > description`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** Relevent text from the law, OMB Memo, or other regulatory documentation

###### <a name="info_front_matter_authority_items_delegation"></a>1.6.1.1.4. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items > delegation`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

**Description:** The role or organization to which the referenced authority is assigned.

###### <a name="info_front_matter_authority_items_delegation_url"></a>1.6.1.1.5. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > authority > authority items > delegation_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

**Description:** Link to the role or organization to which the referenced authority is assigned.

#### <a name="info_front_matter_purpose"></a>1.6.2. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > purpose`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

**Description:** The purpose of the document

#### <a name="info_front_matter_expected_outcomes"></a>1.6.3. Property `FedRAMP Machine Readable Requirements Schema > info > front_matter > expected_outcomes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

**Description:** The expected outcomes of the document

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [expected_outcomes items](#info_front_matter_expected_outcomes_items) | -           |

##### <a name="info_front_matter_expected_outcomes_items"></a>1.6.3.1. FedRAMP Machine Readable Requirements Schema > info > front_matter > expected_outcomes > expected_outcomes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

## <a name="FRA"></a>2. Property `FedRAMP Machine Readable Requirements Schema > FRA`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

**Description:** FedRAMP Technical Assistance Documents. Each document is identified by a 3 character abbreviation.

| Property                       | Pattern | Type   | Deprecated | Definition                     | Title/Description |
| ------------------------------ | ------- | ------ | ---------- | ------------------------------ | ----------------- |
| - [^[A-Z]{3}$](#FRA_pattern1 ) | Yes     | object | No         | In #/$defs/assistance_document | -                 |

### <a name="FRA_pattern1"></a>2.1. Pattern Property `FedRAMP Machine Readable Requirements Schema > FRA > assistance_document`
> All properties whose name matches the regular expression
```^[A-Z]{3}$``` ([Test](https://regex101.com/?regex=%5E%5BA-Z%5D%7B3%7D%24))
must respect the following conditions

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Not allowed                 |
| **Defined in**            | #/$defs/assistance_document |

| Property                                        | Pattern | Type            | Deprecated | Definition | Title/Description |
| ----------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRA_pattern1_id )                       | No      | string          | No         | -          | -                 |
| - [disclaimer](#FRA_pattern1_disclaimer )       | No      | string          | No         | -          | -                 |
| + [purpose](#FRA_pattern1_purpose )             | No      | string          | No         | -          | -                 |
| - [referenced_fr](#FRA_pattern1_referenced_fr ) | No      | array of string | No         | -          | -                 |
| + [requirements](#FRA_pattern1_requirements )   | No      | array           | No         | -          | -                 |

#### <a name="FRA_pattern1_id"></a>2.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRA-[A-Z]{3}$``` [Test](https://regex101.com/?regex=%5EFRA-%5BA-Z%5D%7B3%7D%24) |

#### <a name="FRA_pattern1_disclaimer"></a>2.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > disclaimer`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

#### <a name="FRA_pattern1_purpose"></a>2.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > purpose`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

#### <a name="FRA_pattern1_referenced_fr"></a>2.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                          | Description |
| -------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRA_pattern1_referenced_fr_items) | -           |

##### <a name="FRA_pattern1_referenced_fr_items"></a>2.1.4.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

#### <a name="FRA_pattern1_requirements"></a>2.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements`

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | Yes     |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                            | Description |
| ---------------------------------------------------------- | ----------- |
| [assistance_requirement](#FRA_pattern1_requirements_items) | -           |

##### <a name="FRA_pattern1_requirements_items"></a>2.1.5.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > assistance_requirement

|                           |                                |
| ------------------------- | ------------------------------ |
| **Type**                  | `object`                       |
| **Required**              | No                             |
| **Additional properties** | Not allowed                    |
| **Defined in**            | #/$defs/assistance_requirement |

| Property                                                           | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRA_pattern1_requirements_items_id )                       | No      | string          | No         | -          | -                 |
| - [applies_to](#FRA_pattern1_requirements_items_applies_to )       | No      | string          | No         | -          | -                 |
| + [statement](#FRA_pattern1_requirements_items_statement )         | No      | string          | No         | -          | -                 |
| + [impact](#FRA_pattern1_requirements_items_impact )               | No      | object          | No         | -          | -                 |
| - [referenced_fr](#FRA_pattern1_requirements_items_referenced_fr ) | No      | array of string | No         | -          | -                 |
| - [examples](#FRA_pattern1_requirements_items_examples )           | No      | array           | No         | -          | -                 |

###### <a name="FRA_pattern1_requirements_items_id"></a>2.1.5.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRA-[A-Z]{3}-(?:\d{2}\|[A-Z]{2})$``` [Test](https://regex101.com/?regex=%5EFRA-%5BA-Z%5D%7B3%7D-%28%3F%3A%5Cd%7B2%7D%7C%5BA-Z%5D%7B2%7D%29%24) |

###### <a name="FRA_pattern1_requirements_items_applies_to"></a>2.1.5.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRA_pattern1_requirements_items_statement"></a>2.1.5.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRA_pattern1_requirements_items_impact"></a>2.1.5.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > impact`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Property                                                        | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRA_pattern1_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRA_pattern1_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRA_pattern1_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRA_pattern1_requirements_items_impact_low"></a>2.1.5.1.4.1. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRA_pattern1_requirements_items_impact_moderate"></a>2.1.5.1.4.2. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRA_pattern1_requirements_items_impact_high"></a>2.1.5.1.4.3. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRA_pattern1_requirements_items_referenced_fr"></a>2.1.5.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                             | Description |
| --------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRA_pattern1_requirements_items_referenced_fr_items) | -           |

###### <a name="FRA_pattern1_requirements_items_referenced_fr_items"></a>2.1.5.1.5.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRA_pattern1_requirements_items_examples"></a>2.1.5.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples`

|              |         |
| ------------ | ------- |
| **Type**     | `array` |
| **Required** | No      |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [assistance_example](#FRA_pattern1_requirements_items_examples_items) | -           |

###### <a name="FRA_pattern1_requirements_items_examples_items"></a>2.1.5.1.6.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > assistance_example

|                           |                            |
| ------------------------- | -------------------------- |
| **Type**                  | `object`                   |
| **Required**              | No                         |
| **Additional properties** | Not allowed                |
| **Defined in**            | #/$defs/assistance_example |

| Property                                                                          | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRA_pattern1_requirements_items_examples_items_id )                       | No      | string          | No         | -          | -                 |
| + [key_tests](#FRA_pattern1_requirements_items_examples_items_key_tests )         | No      | array of string | No         | -          | -                 |
| + [examples](#FRA_pattern1_requirements_items_examples_items_examples )           | No      | array of string | No         | -          | -                 |
| - [referenced_fr](#FRA_pattern1_requirements_items_examples_items_referenced_fr ) | No      | array of string | No         | -          | -                 |

###### <a name="FRA_pattern1_requirements_items_examples_items_id"></a>2.1.5.1.6.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRA_pattern1_requirements_items_examples_items_key_tests"></a>2.1.5.1.6.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                    | Description |
| ---------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRA_pattern1_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRA_pattern1_requirements_items_examples_items_key_tests_items"></a>2.1.5.1.6.1.2.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRA_pattern1_requirements_items_examples_items_examples"></a>2.1.5.1.6.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                  | Description |
| -------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRA_pattern1_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRA_pattern1_requirements_items_examples_items_examples_items"></a>2.1.5.1.6.1.3.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRA_pattern1_requirements_items_examples_items_referenced_fr"></a>2.1.5.1.6.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRA_pattern1_requirements_items_examples_items_referenced_fr_items) | -           |

###### <a name="FRA_pattern1_requirements_items_examples_items_referenced_fr_items"></a>2.1.5.1.6.1.4.1. FedRAMP Machine Readable Requirements Schema > FRA > ^[A-Z]{3}$ > requirements > requirements items > examples > examples items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

## <a name="FRD"></a>3. Property `FedRAMP Machine Readable Requirements Schema > FRD`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | No               |
| **Additional properties** | Any type allowed |

**Description:** FedRAMP Definitions. Each document is identified by a 3 character abbreviation.

| Property                       | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| - [^[A-Z]{3}$](#FRD_pattern1 ) | Yes     | array of object | No         | -          | -                 |

### <a name="FRD_pattern1"></a>3.1. Pattern Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$`
> All properties whose name matches the regular expression
```^[A-Z]{3}$``` ([Test](https://regex101.com/?regex=%5E%5BA-Z%5D%7B3%7D%24))
must respect the following conditions

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be         | Description |
| --------------------------------------- | ----------- |
| [^[A-Z]{3}$ items](#FRD_pattern1_items) | -           |

#### <a name="FRD_pattern1_items"></a>3.1.1. FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                              | Pattern | Type            | Deprecated | Definition | Title/Description |
| ----------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRD_pattern1_items_id )                       | No      | string          | No         | -          | -                 |
| + [term](#FRD_pattern1_items_term )                   | No      | string          | No         | -          | -                 |
| - [alts](#FRD_pattern1_items_alts )                   | No      | array of string | No         | -          | -                 |
| + [definition](#FRD_pattern1_items_definition )       | No      | string          | No         | -          | -                 |
| - [note](#FRD_pattern1_items_note )                   | No      | string          | No         | -          | -                 |
| - [reference](#FRD_pattern1_items_reference )         | No      | string          | No         | -          | -                 |
| - [reference_url](#FRD_pattern1_items_reference_url ) | No      | string          | No         | -          | -                 |
| - [referenced_fr](#FRD_pattern1_items_referenced_fr ) | No      | array of string | No         | -          | -                 |
| - [notes](#FRD_pattern1_items_notes )                 | No      | array of string | No         | -          | -                 |

##### <a name="FRD_pattern1_items_id"></a>3.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRD-[A-Z]{3}-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRD-%5BA-Z%5D%7B3%7D-%5Cd%7B2%7D%24) |

##### <a name="FRD_pattern1_items_term"></a>3.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > term`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRD_pattern1_items_alts"></a>3.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > alts`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be              | Description |
| -------------------------------------------- | ----------- |
| [alts items](#FRD_pattern1_items_alts_items) | -           |

###### <a name="FRD_pattern1_items_alts_items"></a>3.1.1.3.1. FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > alts > alts items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

##### <a name="FRD_pattern1_items_definition"></a>3.1.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > definition`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRD_pattern1_items_note"></a>3.1.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

##### <a name="FRD_pattern1_items_reference"></a>3.1.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

##### <a name="FRD_pattern1_items_reference_url"></a>3.1.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

##### <a name="FRD_pattern1_items_referenced_fr"></a>3.1.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                | Description |
| -------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRD_pattern1_items_referenced_fr_items) | -           |

###### <a name="FRD_pattern1_items_referenced_fr_items"></a>3.1.1.8.1. FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

##### <a name="FRD_pattern1_items_notes"></a>3.1.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                | Description |
| ---------------------------------------------- | ----------- |
| [notes items](#FRD_pattern1_items_notes_items) | -           |

###### <a name="FRD_pattern1_items_notes_items"></a>3.1.1.9.1. FedRAMP Machine Readable Requirements Schema > FRD > ^[A-Z]{3}$ > ^[A-Z]{3}$ items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

## <a name="FRR"></a>4. Property `FedRAMP Machine Readable Requirements Schema > FRR`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | No               |
| **Additional properties** | Any type allowed |

| Property                       | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------ | ------- | ------ | ---------- | ---------- | ----------------- |
| - [^[A-Z]{3}$](#FRR_pattern1 ) | Yes     | object | No         | -          | -                 |

### <a name="FRR_pattern1"></a>4.1. Pattern Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$`
> All properties whose name matches the regular expression
```^[A-Z]{3}$``` ([Test](https://regex101.com/?regex=%5E%5BA-Z%5D%7B3%7D%24))
must respect the following conditions

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                  | Pattern | Type   | Deprecated | Definition                     | Title/Description |
| --------------------------------------------------------- | ------- | ------ | ---------- | ------------------------------ | ----------------- |
| + [base](#FRR_pattern1_base )                             | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [exceptions](#FRR_pattern1_exceptions )                 | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [routine_recurring](#FRR_pattern1_routine_recurring )   | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [adaptive](#FRR_pattern1_adaptive )                     | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [transformative](#FRR_pattern1_transformative )         | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [impact](#FRR_pattern1_impact )                         | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [application](#FRR_pattern1_application )               | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [id](#FRR_pattern1_id )                                 | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [access_control](#FRR_pattern1_access_control )         | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [trust_center](#FRR_pattern1_trust_center )             | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [apply](#FRR_pattern1_apply )                           | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [reporting](#FRR_pattern1_reporting )                   | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [timeframes](#FRR_pattern1_timeframes )                 | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [timeframe-low](#FRR_pattern1_timeframe-low )           | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [timeframe-moderate](#FRR_pattern1_timeframe-moderate ) | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [timeframe-high](#FRR_pattern1_timeframe-high )         | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [agencies](#FRR_pattern1_agencies )                     | No      | object | No         | In #/$defs/requirement_section | -                 |
| - [quarterly_reviews](#FRR_pattern1_quarterly_reviews )   | No      | object | No         | In #/$defs/requirement_section | -                 |

#### <a name="FRR_pattern1_base"></a>4.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | Yes                         |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                           | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_base_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_base_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_base_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_base_application"></a>4.1.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_base_id"></a>4.1.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_base_requirements"></a>4.1.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                             | Description |
| ----------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_base_requirements_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items"></a>4.1.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_base_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_base_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_base_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_base_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_base_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_base_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_base_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_base_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_base_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_base_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_base_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_base_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_base_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_base_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_base_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_base_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_base_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_base_requirements_items_id"></a>4.1.1.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_base_requirements_items_name"></a>4.1.1.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_statement"></a>4.1.1.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_base_requirements_items_affects"></a>4.1.1.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_base_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_affects_items"></a>4.1.1.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_base_requirements_items_primary_key_word"></a>4.1.1.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_base_requirements_items_referenced_fr"></a>4.1.1.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                  | Description |
| -------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_base_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_referenced_fr_items"></a>4.1.1.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_is_interim"></a>4.1.1.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_base_requirements_items_following_information"></a>4.1.1.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                  | Description |
| ------------------------------------------------------------------------------------------------ | ----------- |
| [following_information items](#FRR_pattern1_base_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_following_information_items"></a>4.1.1.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_following_information_bullets"></a>4.1.1.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                  | Description |
| ---------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_base_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_following_information_bullets_items"></a>4.1.1.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_note"></a>4.1.1.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_notes"></a>4.1.1.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                  | Description |
| ---------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_base_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_notes_items"></a>4.1.1.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes"></a>4.1.1.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                      | Description |
| ------------------------------------------------------------------------------------ | ----------- |
| [pain_timeframes items](#FRR_pattern1_base_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items"></a>4.1.1.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                              | Pattern | Type        | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_base_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_pain"></a>4.1.1.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.1.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                  |
| ----------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.1.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.1.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.1.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_base_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.1.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_base_requirements_items_reference"></a>4.1.1.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_reference_url"></a>4.1.1.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_base_requirements_items_applies_to"></a>4.1.1.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_base_requirements_items_impact"></a>4.1.1.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                             | Pattern | Type    | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_base_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_base_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_base_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_base_requirements_items_impact_low"></a>4.1.1.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_base_requirements_items_impact_moderate"></a>4.1.1.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_base_requirements_items_impact_high"></a>4.1.1.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_base_requirements_items_examples"></a>4.1.1.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                        | Description |
| ---------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_base_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_examples_items"></a>4.1.1.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                       | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_base_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_base_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_base_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_base_requirements_items_examples_items_id"></a>4.1.1.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_base_requirements_items_examples_items_key_tests"></a>4.1.1.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                         | Description |
| --------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_base_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_examples_items_key_tests_items"></a>4.1.1.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_base_requirements_items_examples_items_examples"></a>4.1.1.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                       | Description |
| ------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_base_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_base_requirements_items_examples_items_examples_items"></a>4.1.1.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > base > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_exceptions"></a>4.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                 | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_exceptions_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_exceptions_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_exceptions_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_exceptions_application"></a>4.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_exceptions_id"></a>4.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_exceptions_requirements"></a>4.1.2.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                   | Description |
| ----------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_exceptions_requirements_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items"></a>4.1.2.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                      | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_exceptions_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_exceptions_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_exceptions_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_exceptions_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_exceptions_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_exceptions_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_exceptions_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_exceptions_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_exceptions_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_exceptions_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_exceptions_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_exceptions_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_exceptions_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_exceptions_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_exceptions_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_exceptions_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_exceptions_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_exceptions_requirements_items_id"></a>4.1.2.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_exceptions_requirements_items_name"></a>4.1.2.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_statement"></a>4.1.2.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_exceptions_requirements_items_affects"></a>4.1.2.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_exceptions_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_affects_items"></a>4.1.2.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_exceptions_requirements_items_primary_key_word"></a>4.1.2.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_exceptions_requirements_items_referenced_fr"></a>4.1.2.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                        | Description |
| -------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_exceptions_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_referenced_fr_items"></a>4.1.2.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_is_interim"></a>4.1.2.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_exceptions_requirements_items_following_information"></a>4.1.2.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                        | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [following_information items](#FRR_pattern1_exceptions_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_following_information_items"></a>4.1.2.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_following_information_bullets"></a>4.1.2.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                        | Description |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_exceptions_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_following_information_bullets_items"></a>4.1.2.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_note"></a>4.1.2.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_notes"></a>4.1.2.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                        | Description |
| ---------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_exceptions_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_notes_items"></a>4.1.2.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes"></a>4.1.2.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [pain_timeframes items](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items"></a>4.1.2.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                    | Pattern | Type        | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_pain"></a>4.1.2.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.2.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                        |
| ----------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.2.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.2.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.2.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_exceptions_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.2.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_exceptions_requirements_items_reference"></a>4.1.2.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_reference_url"></a>4.1.2.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_exceptions_requirements_items_applies_to"></a>4.1.2.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_exceptions_requirements_items_impact"></a>4.1.2.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                   | Pattern | Type    | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_exceptions_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_exceptions_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_exceptions_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_exceptions_requirements_items_impact_low"></a>4.1.2.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_exceptions_requirements_items_impact_moderate"></a>4.1.2.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_exceptions_requirements_items_impact_high"></a>4.1.2.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples"></a>4.1.2.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                              | Description |
| ---------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_exceptions_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items"></a>4.1.2.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                             | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_exceptions_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_exceptions_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_exceptions_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items_id"></a>4.1.2.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items_key_tests"></a>4.1.2.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_exceptions_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items_key_tests_items"></a>4.1.2.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items_examples"></a>4.1.2.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                             | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_exceptions_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_exceptions_requirements_items_examples_items_examples_items"></a>4.1.2.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > exceptions > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_routine_recurring"></a>4.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                        | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_routine_recurring_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_routine_recurring_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_routine_recurring_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_routine_recurring_application"></a>4.1.3.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_routine_recurring_id"></a>4.1.3.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_routine_recurring_requirements"></a>4.1.3.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [requirements items](#FRR_pattern1_routine_recurring_requirements_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items"></a>4.1.3.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                             | Pattern | Type                      | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_routine_recurring_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_routine_recurring_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_routine_recurring_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_routine_recurring_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_routine_recurring_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_routine_recurring_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_routine_recurring_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_routine_recurring_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_routine_recurring_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_routine_recurring_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_routine_recurring_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_routine_recurring_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_routine_recurring_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_routine_recurring_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_routine_recurring_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_routine_recurring_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_id"></a>4.1.3.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_name"></a>4.1.3.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_statement"></a>4.1.3.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_affects"></a>4.1.3.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                   | Description |
| --------------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_routine_recurring_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_affects_items"></a>4.1.3.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_routine_recurring_requirements_items_primary_key_word"></a>4.1.3.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_routine_recurring_requirements_items_referenced_fr"></a>4.1.3.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_routine_recurring_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_referenced_fr_items"></a>4.1.3.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_is_interim"></a>4.1.3.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_following_information"></a>4.1.3.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                               | Description |
| ------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_routine_recurring_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_following_information_items"></a>4.1.3.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_following_information_bullets"></a>4.1.3.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                               | Description |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_routine_recurring_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_following_information_bullets_items"></a>4.1.3.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_note"></a>4.1.3.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_notes"></a>4.1.3.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                               | Description |
| ----------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_routine_recurring_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_notes_items"></a>4.1.3.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes"></a>4.1.3.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items"></a>4.1.3.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                           | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------------ | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_pain"></a>4.1.3.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.3.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                               |
| ------------------------------------------------------------------------------------------------------------ |
| [item 0](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.3.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.3.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.3.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.3.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_reference"></a>4.1.3.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_reference_url"></a>4.1.3.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_applies_to"></a>4.1.3.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_impact"></a>4.1.3.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                          | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_routine_recurring_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_routine_recurring_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_routine_recurring_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_impact_low"></a>4.1.3.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_impact_moderate"></a>4.1.3.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_impact_high"></a>4.1.3.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples"></a>4.1.3.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                     | Description |
| ----------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_routine_recurring_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items"></a>4.1.3.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                    | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_routine_recurring_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_routine_recurring_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_routine_recurring_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items_id"></a>4.1.3.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items_key_tests"></a>4.1.3.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                      | Description |
| ---------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_routine_recurring_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items_key_tests_items"></a>4.1.3.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items_examples"></a>4.1.3.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                    | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_routine_recurring_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_routine_recurring_requirements_items_examples_items_examples_items"></a>4.1.3.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > routine_recurring > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_adaptive"></a>4.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                               | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_adaptive_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_adaptive_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_adaptive_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_adaptive_application"></a>4.1.4.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_adaptive_id"></a>4.1.4.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_adaptive_requirements"></a>4.1.4.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                 | Description |
| --------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_adaptive_requirements_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items"></a>4.1.4.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                    | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_adaptive_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_adaptive_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_adaptive_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_adaptive_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_adaptive_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_adaptive_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_adaptive_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_adaptive_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_adaptive_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_adaptive_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_adaptive_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_adaptive_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_adaptive_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_adaptive_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_adaptive_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_adaptive_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_adaptive_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_adaptive_requirements_items_id"></a>4.1.4.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_adaptive_requirements_items_name"></a>4.1.4.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_statement"></a>4.1.4.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_adaptive_requirements_items_affects"></a>4.1.4.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_adaptive_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_affects_items"></a>4.1.4.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_adaptive_requirements_items_primary_key_word"></a>4.1.4.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_adaptive_requirements_items_referenced_fr"></a>4.1.4.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                      | Description |
| ------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_adaptive_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_referenced_fr_items"></a>4.1.4.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_is_interim"></a>4.1.4.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_adaptive_requirements_items_following_information"></a>4.1.4.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                      | Description |
| ---------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_adaptive_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_following_information_items"></a>4.1.4.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_following_information_bullets"></a>4.1.4.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                      | Description |
| -------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_adaptive_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_following_information_bullets_items"></a>4.1.4.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_note"></a>4.1.4.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_notes"></a>4.1.4.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_adaptive_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_notes_items"></a>4.1.4.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes"></a>4.1.4.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                          | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items"></a>4.1.4.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                  | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_pain"></a>4.1.4.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.4.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                      |
| --------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.4.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.4.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.4.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_adaptive_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.4.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_adaptive_requirements_items_reference"></a>4.1.4.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_reference_url"></a>4.1.4.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_adaptive_requirements_items_applies_to"></a>4.1.4.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_adaptive_requirements_items_impact"></a>4.1.4.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                 | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_adaptive_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_adaptive_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_adaptive_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_adaptive_requirements_items_impact_low"></a>4.1.4.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_adaptive_requirements_items_impact_moderate"></a>4.1.4.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_adaptive_requirements_items_impact_high"></a>4.1.4.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples"></a>4.1.4.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_adaptive_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items"></a>4.1.4.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                           | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_adaptive_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_adaptive_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_adaptive_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items_id"></a>4.1.4.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items_key_tests"></a>4.1.4.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                             | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_adaptive_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items_key_tests_items"></a>4.1.4.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items_examples"></a>4.1.4.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                           | Description |
| ----------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_adaptive_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_adaptive_requirements_items_examples_items_examples_items"></a>4.1.4.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > adaptive > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_transformative"></a>4.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                     | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_transformative_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_transformative_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_transformative_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_transformative_application"></a>4.1.5.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_transformative_id"></a>4.1.5.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_transformative_requirements"></a>4.1.5.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_transformative_requirements_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items"></a>4.1.5.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                          | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_transformative_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_transformative_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_transformative_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_transformative_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_transformative_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_transformative_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_transformative_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_transformative_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_transformative_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_transformative_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_transformative_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_transformative_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_transformative_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_transformative_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_transformative_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_transformative_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_transformative_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_transformative_requirements_items_id"></a>4.1.5.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_transformative_requirements_items_name"></a>4.1.5.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_statement"></a>4.1.5.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_transformative_requirements_items_affects"></a>4.1.5.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_transformative_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_affects_items"></a>4.1.5.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_transformative_requirements_items_primary_key_word"></a>4.1.5.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_transformative_requirements_items_referenced_fr"></a>4.1.5.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_transformative_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_referenced_fr_items"></a>4.1.5.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_is_interim"></a>4.1.5.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_transformative_requirements_items_following_information"></a>4.1.5.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                            | Description |
| ---------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_transformative_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_following_information_items"></a>4.1.5.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_following_information_bullets"></a>4.1.5.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                            | Description |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_transformative_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_following_information_bullets_items"></a>4.1.5.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_note"></a>4.1.5.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_notes"></a>4.1.5.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_transformative_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_notes_items"></a>4.1.5.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes"></a>4.1.5.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items"></a>4.1.5.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                        | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_pain"></a>4.1.5.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.5.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                            |
| --------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.5.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.5.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.5.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_transformative_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.5.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_transformative_requirements_items_reference"></a>4.1.5.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_reference_url"></a>4.1.5.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_transformative_requirements_items_applies_to"></a>4.1.5.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_transformative_requirements_items_impact"></a>4.1.5.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                       | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_transformative_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_transformative_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_transformative_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_transformative_requirements_items_impact_low"></a>4.1.5.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_transformative_requirements_items_impact_moderate"></a>4.1.5.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_transformative_requirements_items_impact_high"></a>4.1.5.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_transformative_requirements_items_examples"></a>4.1.5.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                  | Description |
| -------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_transformative_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items"></a>4.1.5.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                 | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_transformative_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_transformative_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_transformative_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items_id"></a>4.1.5.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items_key_tests"></a>4.1.5.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_transformative_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items_key_tests_items"></a>4.1.5.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items_examples"></a>4.1.5.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                 | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_transformative_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_transformative_requirements_items_examples_items_examples_items"></a>4.1.5.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > transformative > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_impact"></a>4.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                             | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_impact_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_impact_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_impact_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_impact_application"></a>4.1.6.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_impact_id"></a>4.1.6.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_impact_requirements"></a>4.1.6.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                               | Description |
| ------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_impact_requirements_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items"></a>4.1.6.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                  | Pattern | Type                      | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_impact_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_impact_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_impact_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_impact_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_impact_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_impact_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_impact_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_impact_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_impact_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_impact_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_impact_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_impact_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_impact_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_impact_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_impact_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_impact_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_impact_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_impact_requirements_items_id"></a>4.1.6.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_impact_requirements_items_name"></a>4.1.6.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_statement"></a>4.1.6.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_impact_requirements_items_affects"></a>4.1.6.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                        | Description |
| ---------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_impact_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_affects_items"></a>4.1.6.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_impact_requirements_items_primary_key_word"></a>4.1.6.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_impact_requirements_items_referenced_fr"></a>4.1.6.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                    | Description |
| ---------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_impact_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_referenced_fr_items"></a>4.1.6.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_is_interim"></a>4.1.6.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_impact_requirements_items_following_information"></a>4.1.6.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                    | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_impact_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_following_information_items"></a>4.1.6.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_following_information_bullets"></a>4.1.6.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                    | Description |
| ------------------------------------------------------------------------------------------------------------------ | ----------- |
| [following_information_bullets items](#FRR_pattern1_impact_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_following_information_bullets_items"></a>4.1.6.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_note"></a>4.1.6.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_notes"></a>4.1.6.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                    | Description |
| ------------------------------------------------------------------ | ----------- |
| [notes items](#FRR_pattern1_impact_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_notes_items"></a>4.1.6.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes"></a>4.1.6.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                        | Description |
| -------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_impact_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items"></a>4.1.6.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_pain"></a>4.1.6.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.6.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                    |
| ------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.6.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.6.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.6.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_impact_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.6.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_impact_requirements_items_reference"></a>4.1.6.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_reference_url"></a>4.1.6.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_impact_requirements_items_applies_to"></a>4.1.6.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_impact_requirements_items_impact"></a>4.1.6.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                               | Pattern | Type    | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_impact_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_impact_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_impact_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_impact_requirements_items_impact_low"></a>4.1.6.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_impact_requirements_items_impact_moderate"></a>4.1.6.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_impact_requirements_items_impact_high"></a>4.1.6.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_impact_requirements_items_examples"></a>4.1.6.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [examples items](#FRR_pattern1_impact_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items"></a>4.1.6.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                         | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_impact_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_impact_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_impact_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items_id"></a>4.1.6.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items_key_tests"></a>4.1.6.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                           | Description |
| ----------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_impact_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items_key_tests_items"></a>4.1.6.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items_examples"></a>4.1.6.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                         | Description |
| --------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_impact_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_impact_requirements_items_examples_items_examples_items"></a>4.1.6.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > impact > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_application"></a>4.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                  | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_application_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_application_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_application_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_application_application"></a>4.1.7.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_application_id"></a>4.1.7.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_application_requirements"></a>4.1.7.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                    | Description |
| ------------------------------------------------------------------ | ----------- |
| [requirements items](#FRR_pattern1_application_requirements_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items"></a>4.1.7.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                       | Pattern | Type                      | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_application_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_application_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_application_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_application_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_application_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_application_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_application_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_application_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_application_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_application_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_application_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_application_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_application_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_application_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_application_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_application_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_application_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_application_requirements_items_id"></a>4.1.7.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_application_requirements_items_name"></a>4.1.7.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_statement"></a>4.1.7.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_application_requirements_items_affects"></a>4.1.7.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                             | Description |
| --------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_application_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_affects_items"></a>4.1.7.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_application_requirements_items_primary_key_word"></a>4.1.7.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_application_requirements_items_referenced_fr"></a>4.1.7.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                         | Description |
| --------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_application_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_referenced_fr_items"></a>4.1.7.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_is_interim"></a>4.1.7.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_application_requirements_items_following_information"></a>4.1.7.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                         | Description |
| ------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_application_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_following_information_items"></a>4.1.7.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_following_information_bullets"></a>4.1.7.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                         | Description |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_application_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_following_information_bullets_items"></a>4.1.7.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_note"></a>4.1.7.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_notes"></a>4.1.7.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                         | Description |
| ----------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_application_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_notes_items"></a>4.1.7.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes"></a>4.1.7.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                             | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_application_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items"></a>4.1.7.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                     | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------ | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_application_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_pain"></a>4.1.7.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.7.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                         |
| ------------------------------------------------------------------------------------------------------ |
| [item 0](#FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.7.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.7.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.7.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_application_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.7.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_application_requirements_items_reference"></a>4.1.7.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_reference_url"></a>4.1.7.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_application_requirements_items_applies_to"></a>4.1.7.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_application_requirements_items_impact"></a>4.1.7.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                    | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_application_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_application_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_application_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_application_requirements_items_impact_low"></a>4.1.7.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_application_requirements_items_impact_moderate"></a>4.1.7.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_application_requirements_items_impact_high"></a>4.1.7.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_application_requirements_items_examples"></a>4.1.7.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                               | Description |
| ----------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_application_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_examples_items"></a>4.1.7.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                              | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_application_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_application_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_application_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_application_requirements_items_examples_items_id"></a>4.1.7.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_application_requirements_items_examples_items_key_tests"></a>4.1.7.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_application_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_examples_items_key_tests_items"></a>4.1.7.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_application_requirements_items_examples_items_examples"></a>4.1.7.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                              | Description |
| -------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_application_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_application_requirements_items_examples_items_examples_items"></a>4.1.7.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > application > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_id"></a>4.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                         | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_id_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_id_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_id_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_id_application"></a>4.1.8.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_id_id"></a>4.1.8.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_id_requirements"></a>4.1.8.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                           | Description |
| --------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_id_requirements_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items"></a>4.1.8.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                              | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_id_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_id_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_id_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_id_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_id_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_id_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_id_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_id_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_id_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_id_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_id_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_id_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_id_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_id_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_id_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_id_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_id_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_id_requirements_items_id"></a>4.1.8.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_id_requirements_items_name"></a>4.1.8.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_statement"></a>4.1.8.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_id_requirements_items_affects"></a>4.1.8.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                    | Description |
| ------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_id_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_affects_items"></a>4.1.8.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_id_requirements_items_primary_key_word"></a>4.1.8.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_id_requirements_items_referenced_fr"></a>4.1.8.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_id_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_referenced_fr_items"></a>4.1.8.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_is_interim"></a>4.1.8.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_id_requirements_items_following_information"></a>4.1.8.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_id_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_following_information_items"></a>4.1.8.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_following_information_bullets"></a>4.1.8.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                | Description |
| -------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_id_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_following_information_bullets_items"></a>4.1.8.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_note"></a>4.1.8.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_notes"></a>4.1.8.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                | Description |
| -------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_id_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_notes_items"></a>4.1.8.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes"></a>4.1.8.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                    | Description |
| ---------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_id_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items"></a>4.1.8.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                            | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_id_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_pain"></a>4.1.8.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.8.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                |
| --------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.8.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.8.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.8.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_id_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.8.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_id_requirements_items_reference"></a>4.1.8.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_reference_url"></a>4.1.8.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_id_requirements_items_applies_to"></a>4.1.8.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_id_requirements_items_impact"></a>4.1.8.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                           | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_id_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_id_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_id_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_id_requirements_items_impact_low"></a>4.1.8.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_id_requirements_items_impact_moderate"></a>4.1.8.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_id_requirements_items_impact_high"></a>4.1.8.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_id_requirements_items_examples"></a>4.1.8.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_id_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_examples_items"></a>4.1.8.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                     | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_id_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_id_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_id_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_id_requirements_items_examples_items_id"></a>4.1.8.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_id_requirements_items_examples_items_key_tests"></a>4.1.8.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                       | Description |
| ------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_id_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_examples_items_key_tests_items"></a>4.1.8.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_id_requirements_items_examples_items_examples"></a>4.1.8.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                     | Description |
| ----------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_id_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_id_requirements_items_examples_items_examples_items"></a>4.1.8.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > id > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_access_control"></a>4.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                     | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_access_control_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_access_control_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_access_control_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_access_control_application"></a>4.1.9.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_access_control_id"></a>4.1.9.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_access_control_requirements"></a>4.1.9.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_access_control_requirements_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items"></a>4.1.9.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                          | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_access_control_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_access_control_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_access_control_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_access_control_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_access_control_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_access_control_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_access_control_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_access_control_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_access_control_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_access_control_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_access_control_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_access_control_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_access_control_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_access_control_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_access_control_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_access_control_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_access_control_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_access_control_requirements_items_id"></a>4.1.9.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_access_control_requirements_items_name"></a>4.1.9.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_statement"></a>4.1.9.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_access_control_requirements_items_affects"></a>4.1.9.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_access_control_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_affects_items"></a>4.1.9.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_access_control_requirements_items_primary_key_word"></a>4.1.9.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_access_control_requirements_items_referenced_fr"></a>4.1.9.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_access_control_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_referenced_fr_items"></a>4.1.9.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_is_interim"></a>4.1.9.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_access_control_requirements_items_following_information"></a>4.1.9.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                            | Description |
| ---------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_access_control_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_following_information_items"></a>4.1.9.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_following_information_bullets"></a>4.1.9.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                            | Description |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_access_control_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_following_information_bullets_items"></a>4.1.9.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_note"></a>4.1.9.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_notes"></a>4.1.9.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_access_control_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_notes_items"></a>4.1.9.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes"></a>4.1.9.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items"></a>4.1.9.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                        | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_pain"></a>4.1.9.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.9.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                            |
| --------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.9.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.9.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.9.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_access_control_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.9.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_access_control_requirements_items_reference"></a>4.1.9.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_reference_url"></a>4.1.9.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_access_control_requirements_items_applies_to"></a>4.1.9.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_access_control_requirements_items_impact"></a>4.1.9.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                       | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_access_control_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_access_control_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_access_control_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_access_control_requirements_items_impact_low"></a>4.1.9.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_access_control_requirements_items_impact_moderate"></a>4.1.9.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_access_control_requirements_items_impact_high"></a>4.1.9.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_access_control_requirements_items_examples"></a>4.1.9.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                  | Description |
| -------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_access_control_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items"></a>4.1.9.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                 | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_access_control_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_access_control_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_access_control_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items_id"></a>4.1.9.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items_key_tests"></a>4.1.9.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_access_control_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items_key_tests_items"></a>4.1.9.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items_examples"></a>4.1.9.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                 | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_access_control_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_access_control_requirements_items_examples_items_examples_items"></a>4.1.9.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > access_control > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_trust_center"></a>4.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                   | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_trust_center_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_trust_center_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_trust_center_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_trust_center_application"></a>4.1.10.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_trust_center_id"></a>4.1.10.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_trust_center_requirements"></a>4.1.10.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                     | Description |
| ------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_trust_center_requirements_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items"></a>4.1.10.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                        | Pattern | Type                      | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_trust_center_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_trust_center_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_trust_center_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_trust_center_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_trust_center_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_trust_center_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_trust_center_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_trust_center_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_trust_center_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_trust_center_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_trust_center_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_trust_center_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_trust_center_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_trust_center_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_trust_center_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_trust_center_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_trust_center_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_trust_center_requirements_items_id"></a>4.1.10.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_trust_center_requirements_items_name"></a>4.1.10.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_statement"></a>4.1.10.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_trust_center_requirements_items_affects"></a>4.1.10.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                              | Description |
| ---------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_trust_center_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_affects_items"></a>4.1.10.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_trust_center_requirements_items_primary_key_word"></a>4.1.10.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_trust_center_requirements_items_referenced_fr"></a>4.1.10.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                          | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_trust_center_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_referenced_fr_items"></a>4.1.10.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_is_interim"></a>4.1.10.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_trust_center_requirements_items_following_information"></a>4.1.10.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                          | Description |
| -------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_trust_center_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_following_information_items"></a>4.1.10.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_following_information_bullets"></a>4.1.10.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                          | Description |
| ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [following_information_bullets items](#FRR_pattern1_trust_center_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_following_information_bullets_items"></a>4.1.10.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_note"></a>4.1.10.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_notes"></a>4.1.10.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [notes items](#FRR_pattern1_trust_center_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_notes_items"></a>4.1.10.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes"></a>4.1.10.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                              | Description |
| -------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items"></a>4.1.10.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                      | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_pain"></a>4.1.10.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.10.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                          |
| ------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.10.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.10.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.10.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_trust_center_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.10.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_trust_center_requirements_items_reference"></a>4.1.10.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_reference_url"></a>4.1.10.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_trust_center_requirements_items_applies_to"></a>4.1.10.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_trust_center_requirements_items_impact"></a>4.1.10.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                     | Pattern | Type    | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_trust_center_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_trust_center_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_trust_center_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_trust_center_requirements_items_impact_low"></a>4.1.10.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_trust_center_requirements_items_impact_moderate"></a>4.1.10.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_trust_center_requirements_items_impact_high"></a>4.1.10.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples"></a>4.1.10.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [examples items](#FRR_pattern1_trust_center_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items"></a>4.1.10.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                               | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_trust_center_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_trust_center_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_trust_center_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items_id"></a>4.1.10.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items_key_tests"></a>4.1.10.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                 | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_trust_center_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items_key_tests_items"></a>4.1.10.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items_examples"></a>4.1.10.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_trust_center_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_trust_center_requirements_items_examples_items_examples_items"></a>4.1.10.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > trust_center > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_apply"></a>4.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                            | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_apply_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_apply_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_apply_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_apply_application"></a>4.1.11.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_apply_id"></a>4.1.11.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_apply_requirements"></a>4.1.11.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                              | Description |
| ------------------------------------------------------------ | ----------- |
| [requirements items](#FRR_pattern1_apply_requirements_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items"></a>4.1.11.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                 | Pattern | Type                      | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_apply_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_apply_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_apply_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_apply_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_apply_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_apply_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_apply_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_apply_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_apply_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_apply_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_apply_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_apply_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_apply_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_apply_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_apply_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_apply_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_apply_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_apply_requirements_items_id"></a>4.1.11.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_apply_requirements_items_name"></a>4.1.11.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_statement"></a>4.1.11.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_apply_requirements_items_affects"></a>4.1.11.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_apply_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_affects_items"></a>4.1.11.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_apply_requirements_items_primary_key_word"></a>4.1.11.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_apply_requirements_items_referenced_fr"></a>4.1.11.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                   | Description |
| --------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_apply_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_referenced_fr_items"></a>4.1.11.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_is_interim"></a>4.1.11.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_apply_requirements_items_following_information"></a>4.1.11.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_apply_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_following_information_items"></a>4.1.11.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_following_information_bullets"></a>4.1.11.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                   | Description |
| ----------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_apply_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_following_information_bullets_items"></a>4.1.11.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_note"></a>4.1.11.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_notes"></a>4.1.11.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                   | Description |
| ----------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_apply_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_notes_items"></a>4.1.11.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes"></a>4.1.11.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                       | Description |
| ------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_apply_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items"></a>4.1.11.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                               | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------ | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_pain"></a>4.1.11.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.11.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                   |
| ------------------------------------------------------------------------------------------------ |
| [item 0](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.11.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.11.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.11.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_apply_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.11.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_apply_requirements_items_reference"></a>4.1.11.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_reference_url"></a>4.1.11.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_apply_requirements_items_applies_to"></a>4.1.11.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_apply_requirements_items_impact"></a>4.1.11.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                              | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_apply_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_apply_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_apply_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_apply_requirements_items_impact_low"></a>4.1.11.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_apply_requirements_items_impact_moderate"></a>4.1.11.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_apply_requirements_items_impact_high"></a>4.1.11.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_apply_requirements_items_examples"></a>4.1.11.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                         | Description |
| ----------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_apply_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items"></a>4.1.11.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                        | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_apply_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_apply_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_apply_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items_id"></a>4.1.11.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items_key_tests"></a>4.1.11.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                          | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_apply_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items_key_tests_items"></a>4.1.11.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items_examples"></a>4.1.11.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                        | Description |
| -------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_apply_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_apply_requirements_items_examples_items_examples_items"></a>4.1.11.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > apply > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_reporting"></a>4.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_reporting_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_reporting_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_reporting_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_reporting_application"></a>4.1.12.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_reporting_id"></a>4.1.12.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_reporting_requirements"></a>4.1.12.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                  | Description |
| ---------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_reporting_requirements_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items"></a>4.1.12.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                     | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------ | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_reporting_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_reporting_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_reporting_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_reporting_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_reporting_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_reporting_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_reporting_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_reporting_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_reporting_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_reporting_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_reporting_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_reporting_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_reporting_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_reporting_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_reporting_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_reporting_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_reporting_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_reporting_requirements_items_id"></a>4.1.12.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_reporting_requirements_items_name"></a>4.1.12.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_statement"></a>4.1.12.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_reporting_requirements_items_affects"></a>4.1.12.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                           | Description |
| ------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_reporting_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_affects_items"></a>4.1.12.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_reporting_requirements_items_primary_key_word"></a>4.1.12.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_reporting_requirements_items_referenced_fr"></a>4.1.12.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                       | Description |
| ------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_reporting_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_referenced_fr_items"></a>4.1.12.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_is_interim"></a>4.1.12.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_reporting_requirements_items_following_information"></a>4.1.12.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                       | Description |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_reporting_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_following_information_items"></a>4.1.12.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_following_information_bullets"></a>4.1.12.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                       | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_reporting_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_following_information_bullets_items"></a>4.1.12.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_note"></a>4.1.12.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_notes"></a>4.1.12.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_reporting_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_notes_items"></a>4.1.12.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes"></a>4.1.12.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                           | Description |
| ----------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items"></a>4.1.12.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                   | Pattern | Type        | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_pain"></a>4.1.12.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.12.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                       |
| ---------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.12.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.12.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.12.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_reporting_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.12.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_reporting_requirements_items_reference"></a>4.1.12.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_reference_url"></a>4.1.12.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_reporting_requirements_items_applies_to"></a>4.1.12.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_reporting_requirements_items_impact"></a>4.1.12.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                  | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_reporting_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_reporting_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_reporting_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_reporting_requirements_items_impact_low"></a>4.1.12.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_reporting_requirements_items_impact_moderate"></a>4.1.12.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_reporting_requirements_items_impact_high"></a>4.1.12.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_reporting_requirements_items_examples"></a>4.1.12.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                             | Description |
| --------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_reporting_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items"></a>4.1.12.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                            | Pattern | Type            | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_reporting_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_reporting_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_reporting_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items_id"></a>4.1.12.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items_key_tests"></a>4.1.12.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                              | Description |
| -------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_reporting_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items_key_tests_items"></a>4.1.12.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items_examples"></a>4.1.12.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [examples items](#FRR_pattern1_reporting_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_reporting_requirements_items_examples_items_examples_items"></a>4.1.12.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > reporting > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_timeframes"></a>4.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                 | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_timeframes_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_timeframes_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_timeframes_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_timeframes_application"></a>4.1.13.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframes_id"></a>4.1.13.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframes_requirements"></a>4.1.13.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                   | Description |
| ----------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_timeframes_requirements_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items"></a>4.1.13.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                      | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframes_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_timeframes_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_timeframes_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_timeframes_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_timeframes_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_timeframes_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_timeframes_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_timeframes_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_timeframes_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_timeframes_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_timeframes_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_timeframes_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_timeframes_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_timeframes_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_timeframes_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_timeframes_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_timeframes_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframes_requirements_items_id"></a>4.1.13.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_timeframes_requirements_items_name"></a>4.1.13.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_statement"></a>4.1.13.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_timeframes_requirements_items_affects"></a>4.1.13.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_timeframes_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_affects_items"></a>4.1.13.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_timeframes_requirements_items_primary_key_word"></a>4.1.13.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_timeframes_requirements_items_referenced_fr"></a>4.1.13.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                        | Description |
| -------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_timeframes_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_referenced_fr_items"></a>4.1.13.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_is_interim"></a>4.1.13.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframes_requirements_items_following_information"></a>4.1.13.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                        | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [following_information items](#FRR_pattern1_timeframes_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_following_information_items"></a>4.1.13.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_following_information_bullets"></a>4.1.13.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                        | Description |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_timeframes_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_following_information_bullets_items"></a>4.1.13.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_note"></a>4.1.13.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_notes"></a>4.1.13.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                        | Description |
| ---------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_timeframes_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_notes_items"></a>4.1.13.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes"></a>4.1.13.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [pain_timeframes items](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items"></a>4.1.13.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                    | Pattern | Type        | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_pain"></a>4.1.13.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.13.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                        |
| ----------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.13.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.13.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.13.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframes_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.13.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframes_requirements_items_reference"></a>4.1.13.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_reference_url"></a>4.1.13.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_timeframes_requirements_items_applies_to"></a>4.1.13.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframes_requirements_items_impact"></a>4.1.13.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                   | Pattern | Type    | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_timeframes_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_timeframes_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_timeframes_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframes_requirements_items_impact_low"></a>4.1.13.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframes_requirements_items_impact_moderate"></a>4.1.13.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframes_requirements_items_impact_high"></a>4.1.13.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples"></a>4.1.13.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                              | Description |
| ---------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframes_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items"></a>4.1.13.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                             | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframes_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_timeframes_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_timeframes_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items_id"></a>4.1.13.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items_key_tests"></a>4.1.13.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_timeframes_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items_key_tests_items"></a>4.1.13.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items_examples"></a>4.1.13.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                             | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframes_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframes_requirements_items_examples_items_examples_items"></a>4.1.13.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframes > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_timeframe-low"></a>4.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                    | Pattern | Type            | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_timeframe-low_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_timeframe-low_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_timeframe-low_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_timeframe-low_application"></a>4.1.14.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-low_id"></a>4.1.14.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-low_requirements"></a>4.1.14.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_timeframe-low_requirements_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items"></a>4.1.14.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                         | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-low_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_timeframe-low_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_timeframe-low_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_timeframe-low_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_timeframe-low_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_timeframe-low_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_timeframe-low_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_timeframe-low_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_timeframe-low_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_timeframe-low_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_timeframe-low_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_timeframe-low_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_timeframe-low_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_timeframe-low_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_timeframe-low_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_timeframe-low_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_id"></a>4.1.14.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_name"></a>4.1.14.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_statement"></a>4.1.14.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_affects"></a>4.1.14.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                               | Description |
| ----------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_timeframe-low_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_affects_items"></a>4.1.14.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_timeframe-low_requirements_items_primary_key_word"></a>4.1.14.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_timeframe-low_requirements_items_referenced_fr"></a>4.1.14.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                           | Description |
| ----------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_timeframe-low_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_referenced_fr_items"></a>4.1.14.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_is_interim"></a>4.1.14.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_following_information"></a>4.1.14.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                           | Description |
| --------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_timeframe-low_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_following_information_items"></a>4.1.14.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_following_information_bullets"></a>4.1.14.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                           | Description |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_timeframe-low_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_following_information_bullets_items"></a>4.1.14.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_note"></a>4.1.14.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_notes"></a>4.1.14.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                           | Description |
| ------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_timeframe-low_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_notes_items"></a>4.1.14.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes"></a>4.1.14.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items"></a>4.1.14.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                       | Pattern | Type        | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_pain"></a>4.1.14.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.14.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                           |
| -------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.14.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.14.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.14.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.14.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_reference"></a>4.1.14.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_reference_url"></a>4.1.14.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_applies_to"></a>4.1.14.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_impact"></a>4.1.14.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                      | Pattern | Type    | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_timeframe-low_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_timeframe-low_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_timeframe-low_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_impact_low"></a>4.1.14.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_impact_moderate"></a>4.1.14.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_impact_high"></a>4.1.14.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples"></a>4.1.14.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                 | Description |
| ------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframe-low_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items"></a>4.1.14.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-low_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_timeframe-low_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_timeframe-low_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items_id"></a>4.1.14.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items_key_tests"></a>4.1.14.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                  | Description |
| ------------------------------------------------------------------------------------------------ | ----------- |
| [key_tests items](#FRR_pattern1_timeframe-low_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items_key_tests_items"></a>4.1.14.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items_examples"></a>4.1.14.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframe-low_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-low_requirements_items_examples_items_examples_items"></a>4.1.14.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-low > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_timeframe-moderate"></a>4.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                         | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_timeframe-moderate_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_timeframe-moderate_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_timeframe-moderate_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_timeframe-moderate_application"></a>4.1.15.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-moderate_id"></a>4.1.15.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-moderate_requirements"></a>4.1.15.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                           | Description |
| ------------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_timeframe-moderate_requirements_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items"></a>4.1.15.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                              | Pattern | Type                      | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-moderate_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_timeframe-moderate_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_timeframe-moderate_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_timeframe-moderate_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_timeframe-moderate_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_timeframe-moderate_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_timeframe-moderate_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_timeframe-moderate_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_timeframe-moderate_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_timeframe-moderate_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_timeframe-moderate_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_timeframe-moderate_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_timeframe-moderate_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_timeframe-moderate_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_timeframe-moderate_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_timeframe-moderate_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_id"></a>4.1.15.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_name"></a>4.1.15.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_statement"></a>4.1.15.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_affects"></a>4.1.15.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                    | Description |
| ---------------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_timeframe-moderate_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_affects_items"></a>4.1.15.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_primary_key_word"></a>4.1.15.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_referenced_fr"></a>4.1.15.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_timeframe-moderate_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_referenced_fr_items"></a>4.1.15.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_is_interim"></a>4.1.15.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_following_information"></a>4.1.15.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                | Description |
| -------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_timeframe-moderate_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_following_information_items"></a>4.1.15.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_following_information_bullets"></a>4.1.15.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                                | Description |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [following_information_bullets items](#FRR_pattern1_timeframe-moderate_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_following_information_bullets_items"></a>4.1.15.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_note"></a>4.1.15.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_notes"></a>4.1.15.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [notes items](#FRR_pattern1_timeframe-moderate_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_notes_items"></a>4.1.15.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes"></a>4.1.15.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                    | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items"></a>4.1.15.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                            | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_pain"></a>4.1.15.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.15.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                                |
| ------------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.15.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.15.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.15.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.15.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_reference"></a>4.1.15.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_reference_url"></a>4.1.15.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_applies_to"></a>4.1.15.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_impact"></a>4.1.15.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                           | Pattern | Type    | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_timeframe-moderate_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_timeframe-moderate_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_timeframe-moderate_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_impact_low"></a>4.1.15.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_impact_moderate"></a>4.1.15.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_impact_high"></a>4.1.15.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples"></a>4.1.15.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                      | Description |
| ------------------------------------------------------------------------------------ | ----------- |
| [examples items](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items"></a>4.1.15.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                     | Pattern | Type            | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items_id"></a>4.1.15.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items_key_tests"></a>4.1.15.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                       | Description |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items_key_tests_items"></a>4.1.15.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items_examples"></a>4.1.15.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                     | Description |
| --------------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframe-moderate_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-moderate_requirements_items_examples_items_examples_items"></a>4.1.15.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-moderate > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_timeframe-high"></a>4.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                     | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_timeframe-high_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_timeframe-high_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_timeframe-high_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_timeframe-high_application"></a>4.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-high_id"></a>4.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_timeframe-high_requirements"></a>4.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                       | Description |
| --------------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_timeframe-high_requirements_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items"></a>4.1.16.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                          | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-high_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_timeframe-high_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_timeframe-high_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_timeframe-high_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_timeframe-high_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_timeframe-high_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_timeframe-high_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_timeframe-high_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_timeframe-high_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_timeframe-high_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_timeframe-high_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_timeframe-high_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_timeframe-high_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_timeframe-high_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_timeframe-high_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_timeframe-high_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_id"></a>4.1.16.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_name"></a>4.1.16.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_statement"></a>4.1.16.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_affects"></a>4.1.16.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                | Description |
| ------------------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_timeframe-high_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_affects_items"></a>4.1.16.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_timeframe-high_requirements_items_primary_key_word"></a>4.1.16.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_timeframe-high_requirements_items_referenced_fr"></a>4.1.16.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                            | Description |
| ------------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_timeframe-high_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_referenced_fr_items"></a>4.1.16.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_is_interim"></a>4.1.16.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_following_information"></a>4.1.16.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                            | Description |
| ---------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_timeframe-high_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_following_information_items"></a>4.1.16.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_following_information_bullets"></a>4.1.16.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                            | Description |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_timeframe-high_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_following_information_bullets_items"></a>4.1.16.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_note"></a>4.1.16.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_notes"></a>4.1.16.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_timeframe-high_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_notes_items"></a>4.1.16.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes"></a>4.1.16.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                | Description |
| ---------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items"></a>4.1.16.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                        | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_pain"></a>4.1.16.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.16.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                            |
| --------------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.16.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.16.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.16.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.16.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_reference"></a>4.1.16.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_reference_url"></a>4.1.16.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_applies_to"></a>4.1.16.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_impact"></a>4.1.16.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                       | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_timeframe-high_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_timeframe-high_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_timeframe-high_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_impact_low"></a>4.1.16.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_impact_moderate"></a>4.1.16.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_impact_high"></a>4.1.16.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples"></a>4.1.16.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                  | Description |
| -------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframe-high_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items"></a>4.1.16.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                 | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_timeframe-high_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_timeframe-high_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_timeframe-high_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items_id"></a>4.1.16.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items_key_tests"></a>4.1.16.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_timeframe-high_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items_key_tests_items"></a>4.1.16.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items_examples"></a>4.1.16.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                 | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_timeframe-high_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_timeframe-high_requirements_items_examples_items_examples_items"></a>4.1.16.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > timeframe-high > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_agencies"></a>4.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                               | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_agencies_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_agencies_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_agencies_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_agencies_application"></a>4.1.17.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_agencies_id"></a>4.1.17.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_agencies_requirements"></a>4.1.17.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                 | Description |
| --------------------------------------------------------------- | ----------- |
| [requirements items](#FRR_pattern1_agencies_requirements_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items"></a>4.1.17.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                    | Pattern | Type                      | Deprecated | Definition | Title/Description |
| ----------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_agencies_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_agencies_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_agencies_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_agencies_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_agencies_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_agencies_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_agencies_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_agencies_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_agencies_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_agencies_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_agencies_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_agencies_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_agencies_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_agencies_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_agencies_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_agencies_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_agencies_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_agencies_requirements_items_id"></a>4.1.17.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_agencies_requirements_items_name"></a>4.1.17.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_statement"></a>4.1.17.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_agencies_requirements_items_affects"></a>4.1.17.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [affects items](#FRR_pattern1_agencies_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_affects_items"></a>4.1.17.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_agencies_requirements_items_primary_key_word"></a>4.1.17.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_agencies_requirements_items_referenced_fr"></a>4.1.17.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                      | Description |
| ------------------------------------------------------------------------------------ | ----------- |
| [referenced_fr items](#FRR_pattern1_agencies_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_referenced_fr_items"></a>4.1.17.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_is_interim"></a>4.1.17.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_agencies_requirements_items_following_information"></a>4.1.17.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                      | Description |
| ---------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_agencies_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_following_information_items"></a>4.1.17.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_following_information_bullets"></a>4.1.17.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                      | Description |
| -------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_agencies_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_following_information_bullets_items"></a>4.1.17.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_note"></a>4.1.17.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_notes"></a>4.1.17.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                      | Description |
| -------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_agencies_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_notes_items"></a>4.1.17.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes"></a>4.1.17.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                          | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items"></a>4.1.17.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                  | Pattern | Type        | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------------------------------- | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_pain"></a>4.1.17.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.17.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                      |
| --------------------------------------------------------------------------------------------------- |
| [item 0](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.17.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.17.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.17.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_agencies_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.17.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_agencies_requirements_items_reference"></a>4.1.17.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_reference_url"></a>4.1.17.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_agencies_requirements_items_applies_to"></a>4.1.17.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_agencies_requirements_items_impact"></a>4.1.17.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                 | Pattern | Type    | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------ | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_agencies_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_agencies_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_agencies_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_agencies_requirements_items_impact_low"></a>4.1.17.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_agencies_requirements_items_impact_moderate"></a>4.1.17.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_agencies_requirements_items_impact_high"></a>4.1.17.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_agencies_requirements_items_examples"></a>4.1.17.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                            | Description |
| -------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_agencies_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items"></a>4.1.17.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                           | Pattern | Type            | Deprecated | Definition | Title/Description |
| ---------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_agencies_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_agencies_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_agencies_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items_id"></a>4.1.17.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items_key_tests"></a>4.1.17.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                             | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_agencies_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items_key_tests_items"></a>4.1.17.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items_examples"></a>4.1.17.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                           | Description |
| ----------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_agencies_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_agencies_requirements_items_examples_items_examples_items"></a>4.1.17.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > agencies > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

#### <a name="FRR_pattern1_quarterly_reviews"></a>4.1.18. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews`

|                           |                             |
| ------------------------- | --------------------------- |
| **Type**                  | `object`                    |
| **Required**              | No                          |
| **Additional properties** | Any type allowed            |
| **Defined in**            | #/$defs/requirement_section |

| Property                                                        | Pattern | Type            | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [application](#FRR_pattern1_quarterly_reviews_application )   | No      | string          | No         | -          | -                 |
| + [id](#FRR_pattern1_quarterly_reviews_id )                     | No      | string          | No         | -          | -                 |
| + [requirements](#FRR_pattern1_quarterly_reviews_requirements ) | No      | array of object | No         | -          | -                 |

##### <a name="FRR_pattern1_quarterly_reviews_application"></a>4.1.18.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > application`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_quarterly_reviews_id"></a>4.1.18.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

##### <a name="FRR_pattern1_quarterly_reviews_requirements"></a>4.1.18.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                          | Description |
| ------------------------------------------------------------------------ | ----------- |
| [requirements items](#FRR_pattern1_quarterly_reviews_requirements_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items"></a>4.1.18.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                             | Pattern | Type                      | Deprecated | Definition | Title/Description |
| -------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_quarterly_reviews_requirements_items_id )                                                       | No      | string                    | No         | -          | -                 |
| - [name](#FRR_pattern1_quarterly_reviews_requirements_items_name )                                                   | No      | string                    | No         | -          | -                 |
| + [statement](#FRR_pattern1_quarterly_reviews_requirements_items_statement )                                         | No      | string                    | No         | -          | -                 |
| + [affects](#FRR_pattern1_quarterly_reviews_requirements_items_affects )                                             | No      | array of enum (of string) | No         | -          | -                 |
| + [primary_key_word](#FRR_pattern1_quarterly_reviews_requirements_items_primary_key_word )                           | No      | enum (of string)          | No         | -          | -                 |
| - [referenced_fr](#FRR_pattern1_quarterly_reviews_requirements_items_referenced_fr )                                 | No      | array of string           | No         | -          | -                 |
| - [is_interim](#FRR_pattern1_quarterly_reviews_requirements_items_is_interim )                                       | No      | boolean                   | No         | -          | -                 |
| - [following_information](#FRR_pattern1_quarterly_reviews_requirements_items_following_information )                 | No      | array of string           | No         | -          | -                 |
| - [following_information_bullets](#FRR_pattern1_quarterly_reviews_requirements_items_following_information_bullets ) | No      | array of string           | No         | -          | -                 |
| - [note](#FRR_pattern1_quarterly_reviews_requirements_items_note )                                                   | No      | string                    | No         | -          | -                 |
| - [notes](#FRR_pattern1_quarterly_reviews_requirements_items_notes )                                                 | No      | array of string           | No         | -          | -                 |
| - [pain_timeframes](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes )                             | No      | array of object           | No         | -          | -                 |
| - [reference](#FRR_pattern1_quarterly_reviews_requirements_items_reference )                                         | No      | string                    | No         | -          | -                 |
| - [reference_url](#FRR_pattern1_quarterly_reviews_requirements_items_reference_url )                                 | No      | string                    | No         | -          | -                 |
| - [applies_to](#FRR_pattern1_quarterly_reviews_requirements_items_applies_to )                                       | No      | string                    | No         | -          | -                 |
| + [impact](#FRR_pattern1_quarterly_reviews_requirements_items_impact )                                               | No      | object                    | No         | -          | -                 |
| - [examples](#FRR_pattern1_quarterly_reviews_requirements_items_examples )                                           | No      | array of object           | No         | -          | -                 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_id"></a>4.1.18.3.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^FRR-[A-Z]{3}(?:-[A-Z]{2})*-\d{2}$``` [Test](https://regex101.com/?regex=%5EFRR-%5BA-Z%5D%7B3%7D%28%3F%3A-%5BA-Z%5D%7B2%7D%29%2A-%5Cd%7B2%7D%24) |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_name"></a>4.1.18.3.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_statement"></a>4.1.18.3.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_affects"></a>4.1.18.3.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > affects`

|              |                             |
| ------------ | --------------------------- |
| **Type**     | `array of enum (of string)` |
| **Required** | Yes                         |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                   | Description |
| --------------------------------------------------------------------------------- | ----------- |
| [affects items](#FRR_pattern1_quarterly_reviews_requirements_items_affects_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_affects_items"></a>4.1.18.3.1.4.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > affects > affects items

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | No                 |

Must be one of:
* "Providers"
* "Agencies"
* "All"
* "FedRAMP"
* "Assessors"

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_primary_key_word"></a>4.1.18.3.1.5. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > primary_key_word`

|              |                    |
| ------------ | ------------------ |
| **Type**     | `enum (of string)` |
| **Required** | Yes                |

Must be one of:
* "MUST"
* "SHOULD"
* "MAY"
* "SHOULD NOT"
* "MUST NOT"
* "NONE"

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_referenced_fr"></a>4.1.18.3.1.6. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#FRR_pattern1_quarterly_reviews_requirements_items_referenced_fr_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_referenced_fr_items"></a>4.1.18.3.1.6.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_is_interim"></a>4.1.18.3.1.7. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > is_interim`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_following_information"></a>4.1.18.3.1.8. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > following_information`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                               | Description |
| ------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information items](#FRR_pattern1_quarterly_reviews_requirements_items_following_information_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_following_information_items"></a>4.1.18.3.1.8.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > following_information > following_information items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_following_information_bullets"></a>4.1.18.3.1.9. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > following_information_bullets`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                                               | Description |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [following_information_bullets items](#FRR_pattern1_quarterly_reviews_requirements_items_following_information_bullets_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_following_information_bullets_items"></a>4.1.18.3.1.9.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > following_information_bullets > following_information_bullets items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_note"></a>4.1.18.3.1.10. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_notes"></a>4.1.18.3.1.11. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > notes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                               | Description |
| ----------------------------------------------------------------------------- | ----------- |
| [notes items](#FRR_pattern1_quarterly_reviews_requirements_items_notes_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_notes_items"></a>4.1.18.3.1.11.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > notes > notes items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes"></a>4.1.18.3.1.12. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                   | Description |
| ------------------------------------------------------------------------------------------------- | ----------- |
| [pain_timeframes items](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items"></a>4.1.18.3.1.12.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                                           | Pattern | Type        | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------------------------------ | ------- | ----------- | ---------- | ---------- | ----------------- |
| + [pain](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_pain )                           | No      | integer     | No         | -          | -                 |
| + [max_days_irv_lev](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev )   | No      | Combination | No         | -          | -                 |
| + [max_days_nirv_lev](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_nirv_lev ) | No      | integer     | No         | -          | -                 |
| + [max_days_nlev](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_nlev )         | No      | integer     | No         | -          | -                 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_pain"></a>4.1.18.3.1.12.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > pain`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev"></a>4.1.18.3.1.12.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `combining`      |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

| Any of(Option)                                                                                               |
| ------------------------------------------------------------------------------------------------------------ |
| [item 0](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0) |
| [item 1](#FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1) |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i0"></a>4.1.18.3.1.12.1.2.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 0`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | No        |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_irv_lev_anyOf_i1"></a>4.1.18.3.1.12.1.2.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_irv_lev > anyOf > item 1`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_nirv_lev"></a>4.1.18.3.1.12.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nirv_lev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_pain_timeframes_items_max_days_nlev"></a>4.1.18.3.1.12.1.4. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > pain_timeframes > pain_timeframes items > max_days_nlev`

|              |           |
| ------------ | --------- |
| **Type**     | `integer` |
| **Required** | Yes       |

| Restrictions |        |
| ------------ | ------ |
| **Minimum**  | &ge; 0 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_reference"></a>4.1.18.3.1.13. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_reference_url"></a>4.1.18.3.1.14. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_applies_to"></a>4.1.18.3.1.15. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > applies_to`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_impact"></a>4.1.18.3.1.16. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > impact`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | Yes         |
| **Additional properties** | Not allowed |

| Property                                                                          | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#FRR_pattern1_quarterly_reviews_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#FRR_pattern1_quarterly_reviews_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#FRR_pattern1_quarterly_reviews_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_impact_low"></a>4.1.18.3.1.16.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_impact_moderate"></a>4.1.18.3.1.16.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_impact_high"></a>4.1.18.3.1.16.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples"></a>4.1.18.3.1.17. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                     | Description |
| ----------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items"></a>4.1.18.3.1.17.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                                    | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items_id )               | No      | string          | No         | -          | -                 |
| + [key_tests](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items_key_tests ) | No      | array of string | No         | -          | -                 |
| + [examples](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items_examples )   | No      | array of string | No         | -          | -                 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items_id"></a>4.1.18.3.1.17.1.1. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items_key_tests"></a>4.1.18.3.1.17.1.2. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items > key_tests`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                      | Description |
| ---------------------------------------------------------------------------------------------------- | ----------- |
| [key_tests items](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items_key_tests_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items_key_tests_items"></a>4.1.18.3.1.17.1.2.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items > key_tests > key_tests items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items_examples"></a>4.1.18.3.1.17.1.3. Property `FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items > examples`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 1                  |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                                                    | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [examples items](#FRR_pattern1_quarterly_reviews_requirements_items_examples_items_examples_items) | -           |

###### <a name="FRR_pattern1_quarterly_reviews_requirements_items_examples_items_examples_items"></a>4.1.18.3.1.17.1.3.1. FedRAMP Machine Readable Requirements Schema > FRR > ^[A-Z]{3}$ > quarterly_reviews > requirements > requirements items > examples > examples items > examples > examples items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="KSI"></a>5. Property `FedRAMP Machine Readable Requirements Schema > KSI`

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                       | Pattern | Type   | Deprecated | Definition | Title/Description |
| ------------------------------ | ------- | ------ | ---------- | ---------- | ----------------- |
| - [^[A-Z]{3}$](#KSI_pattern1 ) | Yes     | object | No         | -          | -                 |

### <a name="KSI_pattern1"></a>5.1. Pattern Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$`
> All properties whose name matches the regular expression
```^[A-Z]{3}$``` ([Test](https://regex101.com/?regex=%5E%5BA-Z%5D%7B3%7D%24))
must respect the following conditions

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                        | Pattern | Type            | Deprecated | Definition | Title/Description |
| ----------------------------------------------- | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#KSI_pattern1_id )                       | No      | string          | No         | -          | -                 |
| + [name](#KSI_pattern1_name )                   | No      | string          | No         | -          | -                 |
| + [indicator](#KSI_pattern1_indicator )         | No      | string          | No         | -          | -                 |
| - [referenced_fr](#KSI_pattern1_referenced_fr ) | No      | array of string | No         | -          | -                 |
| + [requirements](#KSI_pattern1_requirements )   | No      | array of object | No         | -          | -                 |

#### <a name="KSI_pattern1_id"></a>5.1.1. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^KSI-[A-Z]{3}$``` [Test](https://regex101.com/?regex=%5EKSI-%5BA-Z%5D%7B3%7D%24) |

#### <a name="KSI_pattern1_name"></a>5.1.2. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

#### <a name="KSI_pattern1_indicator"></a>5.1.3. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > indicator`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

#### <a name="KSI_pattern1_referenced_fr"></a>5.1.4. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                          | Description |
| -------------------------------------------------------- | ----------- |
| [referenced_fr items](#KSI_pattern1_referenced_fr_items) | -           |

##### <a name="KSI_pattern1_referenced_fr_items"></a>5.1.4.1. FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

#### <a name="KSI_pattern1_requirements"></a>5.1.5. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | Yes               |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                        | Description |
| ------------------------------------------------------ | ----------- |
| [requirements items](#KSI_pattern1_requirements_items) | -           |

##### <a name="KSI_pattern1_requirements_items"></a>5.1.5.1. FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                           | Pattern | Type            | Deprecated | Definition | Title/Description |
| ------------------------------------------------------------------ | ------- | --------------- | ---------- | ---------- | ----------------- |
| + [id](#KSI_pattern1_requirements_items_id )                       | No      | string          | No         | -          | -                 |
| - [name](#KSI_pattern1_requirements_items_name )                   | No      | string          | No         | -          | -                 |
| + [statement](#KSI_pattern1_requirements_items_statement )         | No      | string          | No         | -          | -                 |
| - [controls](#KSI_pattern1_requirements_items_controls )           | No      | array of object | No         | -          | -                 |
| - [impact](#KSI_pattern1_requirements_items_impact )               | No      | object          | No         | -          | -                 |
| - [referenced_fr](#KSI_pattern1_requirements_items_referenced_fr ) | No      | array of string | No         | -          | -                 |
| - [note](#KSI_pattern1_requirements_items_note )                   | No      | string          | No         | -          | -                 |
| - [retired](#KSI_pattern1_requirements_items_retired )             | No      | boolean         | No         | -          | -                 |
| - [reference_url](#KSI_pattern1_requirements_items_reference_url ) | No      | string          | No         | -          | -                 |
| - [reference](#KSI_pattern1_requirements_items_reference )         | No      | string          | No         | -          | -                 |

###### <a name="KSI_pattern1_requirements_items_id"></a>5.1.5.1.1. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^KSI-[A-Z]{3}-\d{2}$``` [Test](https://regex101.com/?regex=%5EKSI-%5BA-Z%5D%7B3%7D-%5Cd%7B2%7D%24) |

###### <a name="KSI_pattern1_requirements_items_name"></a>5.1.5.1.2. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > name`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="KSI_pattern1_requirements_items_statement"></a>5.1.5.1.3. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > statement`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="KSI_pattern1_requirements_items_controls"></a>5.1.5.1.4. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > controls`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of object` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                   | Description |
| ----------------------------------------------------------------- | ----------- |
| [controls items](#KSI_pattern1_requirements_items_controls_items) | -           |

###### <a name="KSI_pattern1_requirements_items_controls_items"></a>5.1.5.1.4.1. FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > controls > controls items

|                           |             |
| ------------------------- | ----------- |
| **Type**                  | `object`    |
| **Required**              | No          |
| **Additional properties** | Not allowed |

| Property                                                                    | Pattern | Type   | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- | ----------------- |
| + [control_id](#KSI_pattern1_requirements_items_controls_items_control_id ) | No      | string | No         | -          | -                 |
| + [title](#KSI_pattern1_requirements_items_controls_items_title )           | No      | string | No         | -          | -                 |

###### <a name="KSI_pattern1_requirements_items_controls_items_control_id"></a>5.1.5.1.4.1.1. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > controls > controls items > control_id`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="KSI_pattern1_requirements_items_controls_items_title"></a>5.1.5.1.4.1.2. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > controls > controls items > title`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | Yes      |

###### <a name="KSI_pattern1_requirements_items_impact"></a>5.1.5.1.5. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > impact`

|                           |                  |
| ------------------------- | ---------------- |
| **Type**                  | `object`         |
| **Required**              | No               |
| **Additional properties** | Any type allowed |

| Property                                                        | Pattern | Type    | Deprecated | Definition | Title/Description |
| --------------------------------------------------------------- | ------- | ------- | ---------- | ---------- | ----------------- |
| + [low](#KSI_pattern1_requirements_items_impact_low )           | No      | boolean | No         | -          | -                 |
| + [moderate](#KSI_pattern1_requirements_items_impact_moderate ) | No      | boolean | No         | -          | -                 |
| - [high](#KSI_pattern1_requirements_items_impact_high )         | No      | boolean | No         | -          | -                 |

###### <a name="KSI_pattern1_requirements_items_impact_low"></a>5.1.5.1.5.1. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > impact > low`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="KSI_pattern1_requirements_items_impact_moderate"></a>5.1.5.1.5.2. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > impact > moderate`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | Yes       |

###### <a name="KSI_pattern1_requirements_items_impact_high"></a>5.1.5.1.5.3. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > impact > high`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="KSI_pattern1_requirements_items_referenced_fr"></a>5.1.5.1.6. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > referenced_fr`

|              |                   |
| ------------ | ----------------- |
| **Type**     | `array of string` |
| **Required** | No                |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be                                             | Description |
| --------------------------------------------------------------------------- | ----------- |
| [referenced_fr items](#KSI_pattern1_requirements_items_referenced_fr_items) | -           |

###### <a name="KSI_pattern1_requirements_items_referenced_fr_items"></a>5.1.5.1.6.1. FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > referenced_fr > referenced_fr items

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="KSI_pattern1_requirements_items_note"></a>5.1.5.1.7. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > note`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

###### <a name="KSI_pattern1_requirements_items_retired"></a>5.1.5.1.8. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > retired`

|              |           |
| ------------ | --------- |
| **Type**     | `boolean` |
| **Required** | No        |

###### <a name="KSI_pattern1_requirements_items_reference_url"></a>5.1.5.1.9. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > reference_url`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |
| **Format**   | `uri`    |

###### <a name="KSI_pattern1_requirements_items_reference"></a>5.1.5.1.10. Property `FedRAMP Machine Readable Requirements Schema > KSI > ^[A-Z]{3}$ > requirements > requirements items > reference`

|              |          |
| ------------ | -------- |
| **Type**     | `string` |
| **Required** | No       |

----------------------------------------------------------------------------------------------------------------------------
Generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans) on 2025-11-17 at 14:00:10 -0500
