// react
import React, { useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import Decor from '~/components/shared/Decor';
import url from '~/services/url';
import VehicleSelect from '~/components/shared/VehicleSelect';
import { baseUrl } from '~/services/utils';
import { hrefToRouterArgs, useAppRouter } from '~/services/router';
import { IVehicle } from '~/interfaces/vehicle';


interface props {
    backgroundUrl?: string
}

function BlockFinder(props: props) {
    const {backgroundUrl} = props;

    const router = useAppRouter();
    const [vehicle, setVehicle] = useState<IVehicle | null>(null);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!vehicle) {
            return;
        }

        router.push(
            ...hrefToRouterArgs(url.products({
                filters: {
                    filter_vehicle: vehicle.id,
                },
            })),
        ).then();
    };

    return (
        <div className="block block-finder">
            <Decor className="block-finder__decor" type="bottom" />
            <div
                className="block-finder__image"
                style={{ backgroundImage: backgroundUrl || `url(${baseUrl('/images/finder.jpg')})` }}
            />
            <div className="block-finder__body container container--max--xl">
                <div className="block-finder__title">
                    <FormattedMessage id="TEXT_BLOCK_FINDER_TITLE" />
                </div>
                <div className="block-finder__subtitle">
                    <FormattedMessage id="TEXT_BLOCK_FINDER_SUBTITLE" />
                </div>
                <form className="block-finder__form" onSubmit={onSubmit}>
                    <VehicleSelect className="block-finder__select" onVehicleChange={setVehicle} />

                    <button className="block-finder__button" type="submit">
                        <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default React.memo(BlockFinder);
