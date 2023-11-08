import React, {} from 'react';
import {TopNavigation} from "../../02_molecules";
import {WelcomeTemplate} from "../../04_templates";

export interface HomePageProps {
    app_logo: string
    first_name: string
    email: string
    profile_photo: string
    token: string
    signOut?: () => void
}

const HomePage = (props: HomePageProps) => {

    /*
    TODO: Make a API call to fetch the registries
    */

    return (
        <>
            <TopNavigation
                classNames={'px-24 bg-ak-dark-blue'}
                logo={props.app_logo}
                createRegistry={() => console.log('create registry clicked')}
                logout={props.signOut!}
                email={props.email}
                profile_photo={props.profile_photo}
            />
            <div className="h-fit min-h-screen bg-ak-dark-blue">
                <WelcomeTemplate first_name={props.first_name} bannerStyles={"text-white"}>

                </WelcomeTemplate>
            </div>

        </>
    )
};
export default HomePage;