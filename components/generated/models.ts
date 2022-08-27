// Code generated by wunderctl. DO NOT EDIT.

export interface CreateProjectInput {
	name: string;
	description: string;
	budget: number;
	createdAt: string;
}

export interface DeleteProjectInput {
	id: number;
}

export interface UpdateProjectInput {
	id: number;
	name: db_StringFieldUpdateOperationsInput;
	description: db_StringFieldUpdateOperationsInput;
}

export interface UpdateProjectStatusInput {
	id: number;
	status?: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
}

export interface CreateProjectResponse {
	data?: CreateProjectResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DeleteProjectResponse {
	data?: DeleteProjectResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetProjectsResponse {
	data?: GetProjectsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface HelloResponse {
	data?: HelloResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateProjectResponse {
	data?: UpdateProjectResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateProjectStatusResponse {
	data?: UpdateProjectStatusResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateProjectResponseData {
	db_createOneProject?: {
		name: string;
	};
}

export interface DeleteProjectResponseData {
	db_deleteOneProject?: {
		id: number;
	};
}

export interface GetProjectsResponseData {
	db_findManyProject: {
		id: number;
		name: string;
		description: string;
		createdAt: string;
		budget: number;
	}[];
}

export interface HelloResponseData {
	gql_hello?: string;
}

export interface UpdateProjectResponseData {
	db_updateOneProject?: {
		id: number;
	};
}

export interface UpdateProjectStatusResponseData {
	db_updateOneProject?: {
		id: number;
	};
}

export interface db_StringFieldUpdateOperationsInput {
	set?: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
