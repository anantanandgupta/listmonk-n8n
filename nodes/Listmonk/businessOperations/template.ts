import type { INodeProperties } from 'n8n-workflow';

export const templateOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['template'],
			},
		},
        options: [
            {
				name: 'Get all',
				value: 'getTemplates',
				action: 'Get all templates',
				routing: {
					request: {
						method: 'GET',
						url: '/templates',
					},
				},
			},
            {
				name: 'Get template by id',
				value: 'getTemplateById',
				action: 'Get template by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/templates/{{$parameter.id}}',
					},
				},
			},
            {
				name: 'Get preview by id',
				value: 'getTemplatePreviewById',
				action: 'Get template preview by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/templates/{{$parameter.id}}/preview',
					},
				},
			},
            {
                name: 'Create',
                value: 'createTemplate',
                action: 'Create a template',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/templates',
                        body: `={{JSON.stringify({"name":$parameter.name, "type":$parameter.typeTemplate, "subject":$parameter.subject, "body":$parameter.body})}}`,
                        encoding: 'json',
                        json: true
                    }
                }
            },
            {
                name: 'Modify',
                value: 'modifyTemplate',
                action: 'Modify template',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/templates/{{$parameter.id}}',
                        body: `={{JSON.stringify({"name":$parameter.name, "type":$parameter.typeTemplate, "subject":$parameter.subject, "body":$parameter.body})}}`,
                        encoding: 'json',
                        json: true
                    }
                }
            },
            {
				name: 'Set template as default',
				value: 'setTemplateAsDefault',
				action: 'Set template as default',
				routing: {
					request: {
						method: 'PUT',
						url: '=/templates/{{$parameter.id}}/default',
					},
				},
			},
            {
				name: 'Delete template by id',
				value: 'deleteTemplate',
				action: 'Delete template by id',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/templates/{{$parameter.id}}',
					},
				},
			},
        ],
        default : "getMedia"
    }
];