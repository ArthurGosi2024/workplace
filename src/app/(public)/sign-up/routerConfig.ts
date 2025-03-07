export interface IRouterStageActionsProps {
	id: number;
    router?: string;
	label: string;
}

export const ROUTER_STAGES: IRouterStageActionsProps[] = [
	{
		id: 1,
        router: 'sign-up',
		label: "Valide seu telefone",
	},
	{
		id: 2,
        router : 'tell-about-yourself',
		label: "Fale sobre você",
	},
	{
		id: 3,
		label: "Fale sobre sua empresa",
	},
	{
		id: 4,
		label: "Convide membros da equipe",
	},
];
