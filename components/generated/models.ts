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

export interface GetProjectsByStatusInput {
	status: db_EnumStatusFilter;
}

export interface UpdateArchiveStatusInput {
	id: number;
	archived: db_BoolFieldUpdateOperationsInput;
}

export interface UpdateProjectInput {
	id: number;
	name: db_StringFieldUpdateOperationsInput;
	description: db_StringFieldUpdateOperationsInput;
	budget?: db_FloatFieldUpdateOperationsInput;
}

export interface UpdateProjectStatusInput {
	id: number;
	status?: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
}

export interface CountArchiveProjectsResponse {
	data?: CountArchiveProjectsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface CreateProjectResponse {
	data?: CreateProjectResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DeleteProjectResponse {
	data?: DeleteProjectResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetArchivedProjectsResponse {
	data?: GetArchivedProjectsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetProjectsResponse {
	data?: GetProjectsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetProjectsByStatusResponse {
	data?: GetProjectsByStatusResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetProjectsCountGroupByStatusResponse {
	data?: GetProjectsCountGroupByStatusResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface HelloResponse {
	data?: HelloResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface TopFiveMostExpensiveProjectsResponse {
	data?: TopFiveMostExpensiveProjectsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UpdateArchiveStatusResponse {
	data?: UpdateArchiveStatusResponseData;
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

export interface CountArchiveProjectsResponseData {
	db_aggregateProject: {
		_count?: {
			id: number;
		};
	};
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

export interface GetArchivedProjectsResponseData {
	db_findManyProject: {
		id: number;
		name: string;
		description: string;
		createdAt: string;
		budget: number;
		status: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
		archived: boolean;
	}[];
}

export interface GetProjectsResponseData {
	db_findManyProject: {
		id: number;
		name: string;
		description: string;
		createdAt: string;
		budget: number;
		archived: boolean;
	}[];
}

export interface GetProjectsByStatusResponseData {
	db_findManyProject: {
		id: number;
		name: string;
		description: string;
		createdAt: string;
		budget: number;
		archived: boolean;
		status: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
	}[];
}

export interface GetProjectsCountGroupByStatusResponseData {
	db_groupByProject: {
		status: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
		_count?: {
			id: number;
		};
	}[];
}

export interface HelloResponseData {
	gql_hello?: string;
}

export interface TopFiveMostExpensiveProjectsResponseData {
	db_findManyProject: {
		id: number;
		name: string;
		budget: number;
	}[];
}

export interface UpdateArchiveStatusResponseData {
	db_updateOneProject?: {
		id: number;
		status: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
	};
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

export interface db_EnumStatusFilter {
	equals?: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
	in?: ("NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED")[];
	notIn?: ("NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED")[];
	not?: "NEW" | "PROGRESS" | "COMPLETED" | "CANCELLED" | "ARCHIVED";
}

export interface db_BoolFieldUpdateOperationsInput {
	set?: boolean;
}

export interface db_StringFieldUpdateOperationsInput {
	set?: string;
}

export interface db_FloatFieldUpdateOperationsInput {
	set?: number;
	increment?: number;
	decrement?: number;
	multiply?: number;
	divide?: number;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
