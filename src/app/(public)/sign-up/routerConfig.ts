export interface IRouterStageActionsProps {
	id: number;
    router?: string;
	label: string;
}

export const ROUTER_STAGES: IRouterStageActionsProps[] = [
	{
		id: 1,
		label: "Valide seu telefone",
	},
	{
		id: 2,
        router : 'tell-about-yourself',
		label: "Fale sobre você",
	},
	{
		id: 3,
		router : 'tell-about-your-company',
		label: "Fale sobre sua empresa",
	},
	{
		id: 4,
		label: "Convide membros da equipe",
	},
];
