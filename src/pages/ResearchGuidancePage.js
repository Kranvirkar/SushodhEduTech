import React from 'react';
import Header from "../component/Header";
import ResearchGuidance from "../component/ResearchGuidance";
import Footer from "../component/Footer";
import Courses from "../component/Courses";
import Layout from "./Layout";

function ResearchGuidancePage(props) {
    return (
        <>
            <Layout>
                <ResearchGuidance/>
            </Layout>
        </>
    );
}

export default ResearchGuidancePage;