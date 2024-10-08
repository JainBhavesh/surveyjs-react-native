import React from 'react';
export interface FactoryProps {
    apis: any;
    isPreview?: boolean;
    json: any;
    completeText?: string;
}
export default class Factory extends React.PureComponent<FactoryProps> {
    private model;
    render(): JSX.Element;
}
