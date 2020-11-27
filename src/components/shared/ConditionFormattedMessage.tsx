import {StockAvailability} from "~/api/graphql/types";
import classNames from "classnames";
import React from "react";
import {IProduct} from "~/interfaces/product";
import {FormattedMessage} from "react-intl";

interface Props {
    onSuccessId: string;
    onFailId: string;
    condition: boolean
}

function ConditionFormattedMessage (props: Props){
    const { onSuccessId, onFailId, condition } = props;

    return (
        (condition && <FormattedMessage id={onSuccessId}/>) || <FormattedMessage id={onFailId}/>
    );
}

export default ConditionFormattedMessage
