// Code generated by wunderctl. DO NOT EDIT.

import type {
	CountArchiveProjectsResponse,
	CountArchiveProjectsResponseData,
	CreateProjectResponse,
	CreateProjectInput,
	CreateProjectResponseData,
	DeleteProjectResponse,
	DeleteProjectInput,
	DeleteProjectResponseData,
	GetArchivedProjectsResponse,
	GetArchivedProjectsResponseData,
	GetProjectsResponse,
	GetProjectsResponseData,
	GetProjectsByStatusResponse,
	GetProjectsByStatusInput,
	GetProjectsByStatusResponseData,
	GetProjectsCountGroupByStatusResponse,
	GetProjectsCountGroupByStatusResponseData,
	HelloResponse,
	HelloResponseData,
	TopFiveMostExpensiveProjectsResponse,
	TopFiveMostExpensiveProjectsResponseData,
	UpdateArchiveStatusResponse,
	UpdateArchiveStatusInput,
	UpdateArchiveStatusResponseData,
	UpdateProjectResponse,
	UpdateProjectInput,
	UpdateProjectResponseData,
	UpdateProjectStatusResponse,
	UpdateProjectStatusInput,
	UpdateProjectStatusResponseData,
} from "./models";
import { createContext } from "react";
import {
	QueryArgsWithInput,
	SubscriptionArgs,
	SubscriptionArgsWithInput,
	hooks,
	WunderGraphContextProperties,
	Client,
} from "@wundergraph/nextjs";

export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "5c664688",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.96.1",
		authenticationEnabled: true,
	},
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider>(WunderGraphContext);

export const useQuery = {
	GetProjectsByStatus: (args: QueryArgsWithInput<GetProjectsByStatusInput>) =>
		hooks.useQueryWithInput<GetProjectsByStatusInput, GetProjectsByStatusResponseData, Role>(WunderGraphContext, {
			operationName: "GetProjectsByStatus",
			requiresAuthentication: false,
		})(args),
	CountArchiveProjects: hooks.useQueryWithoutInput<CountArchiveProjectsResponseData, Role>(WunderGraphContext, {
		operationName: "CountArchiveProjects",
		requiresAuthentication: false,
	}),
	GetArchivedProjects: hooks.useQueryWithoutInput<GetArchivedProjectsResponseData, Role>(WunderGraphContext, {
		operationName: "GetArchivedProjects",
		requiresAuthentication: false,
	}),
	GetProjects: hooks.useQueryWithoutInput<GetProjectsResponseData, Role>(WunderGraphContext, {
		operationName: "GetProjects",
		requiresAuthentication: false,
	}),
	GetProjectsCountGroupByStatus: hooks.useQueryWithoutInput<GetProjectsCountGroupByStatusResponseData, Role>(
		WunderGraphContext,
		{
			operationName: "GetProjectsCountGroupByStatus",
			requiresAuthentication: false,
		}
	),
	Hello: hooks.useQueryWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
		operationName: "Hello",
		requiresAuthentication: false,
	}),
	TopFiveMostExpensiveProjects: hooks.useQueryWithoutInput<TopFiveMostExpensiveProjectsResponseData, Role>(
		WunderGraphContext,
		{
			operationName: "TopFiveMostExpensiveProjects",
			requiresAuthentication: false,
		}
	),
};

export const useMutation = {
	CreateProject: () =>
		hooks.useMutationWithInput<CreateProjectInput, CreateProjectResponseData, Role>(WunderGraphContext, {
			operationName: "CreateProject",
			requiresAuthentication: false,
		}),
	DeleteProject: () =>
		hooks.useMutationWithInput<DeleteProjectInput, DeleteProjectResponseData, Role>(WunderGraphContext, {
			operationName: "DeleteProject",
			requiresAuthentication: false,
		}),
	UpdateArchiveStatus: () =>
		hooks.useMutationWithInput<UpdateArchiveStatusInput, UpdateArchiveStatusResponseData, Role>(WunderGraphContext, {
			operationName: "UpdateArchiveStatus",
			requiresAuthentication: false,
		}),
	UpdateProject: () =>
		hooks.useMutationWithInput<UpdateProjectInput, UpdateProjectResponseData, Role>(WunderGraphContext, {
			operationName: "UpdateProject",
			requiresAuthentication: false,
		}),
	UpdateProjectStatus: () =>
		hooks.useMutationWithInput<UpdateProjectStatusInput, UpdateProjectStatusResponseData, Role>(WunderGraphContext, {
			operationName: "UpdateProjectStatus",
			requiresAuthentication: false,
		}),
};

export const useSubscription = {};

export const useLiveQuery = {
	GetProjectsByStatus: (args: SubscriptionArgsWithInput<GetProjectsByStatusInput>) =>
		hooks.useSubscriptionWithInput<GetProjectsByStatusInput, GetProjectsByStatusResponseData, Role>(
			WunderGraphContext,
			{
				operationName: "GetProjectsByStatus",
				isLiveQuery: true,
				requiresAuthentication: false,
			}
		)(args),
	CountArchiveProjects: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<CountArchiveProjectsResponseData, Role>(WunderGraphContext, {
			operationName: "CountArchiveProjects",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	GetArchivedProjects: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<GetArchivedProjectsResponseData, Role>(WunderGraphContext, {
			operationName: "GetArchivedProjects",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	GetProjects: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<GetProjectsResponseData, Role>(WunderGraphContext, {
			operationName: "GetProjects",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	GetProjectsCountGroupByStatus: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<GetProjectsCountGroupByStatusResponseData, Role>(WunderGraphContext, {
			operationName: "GetProjectsCountGroupByStatus",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	Hello: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
			operationName: "Hello",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
	TopFiveMostExpensiveProjects: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<TopFiveMostExpensiveProjectsResponseData, Role>(WunderGraphContext, {
			operationName: "TopFiveMostExpensiveProjects",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
};
