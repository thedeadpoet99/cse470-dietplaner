import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowBmi = () => {
    const [bmiResult, setBmiResult] = useState(null);
    let bmiStage = '';
    let bmiDescription = '';

    useEffect(() => {
        const fetchBmiData = async () => {
            try {
                const userdata = localStorage.getItem('user');
                const user = JSON.parse(userdata);
                const username = user.username;
                const response = await axios.post(`http://localhost:3001/diet/bmicalculator/${username}`);
                setBmiResult(response.data);
            } catch (error) {
                console.error('Error fetching BMI data:', error);
            }
        };

        fetchBmiData();
    }, []);

    const renderBmiResult = () => {
        if (bmiResult) {
            if (bmiResult.bmi < 18.5) {
                bmiStage = 'Underweight';
                bmiDescription = (
                    <ul className="text-left list-disc mt-2">
                        <li>Weakened immune system</li>
                        <li>Nutritional deficiencies</li>
                        <li>Osteoporosis risk</li>
                    </ul>
                );
            } else if (bmiResult.bmi < 24.9) {
                bmiStage = 'Normal weight';
                bmiDescription = (
                    <ul className="text-left list-disc mt-2">
                        <li>Lower risks of chronic diseases</li>
                        <li>Healthy BMI range</li>
                    </ul>
                );
            } else if (bmiResult.bmi < 29.9) {
                bmiStage = 'Overweight';
                bmiDescription = (
                    <ul className="text-left list-disc mt-2">
                        <li>Increased risks of type 2 diabetes</li>
                        <li>High blood pressure risk</li>
                        <li>Heart disease risk</li>
                        <li>Stroke risk</li>
                        <li>Risk of certain cancers</li>
                    </ul>
                );
            } else if (bmiResult.bmi < 34.9) {
                bmiStage = 'Obesity (Class 1)';
                bmiDescription = (
                    <ul className="text-left list-disc mt-2">
                        <li>Higher risks of type 2 diabetes</li>
                        <li>Increased risk of heart disease</li>
                        <li>Stroke risk</li>
                        <li>Risk of certain cancers</li>
                    </ul>
                );
            } else {
                bmiStage = 'Severe Obesity';
                bmiDescription = (
                    <ul className="text-left list-disc mt-2">
                        <li>Greatly increased risk of serious health conditions</li>
                        <li>Higher risk of type 2 diabetes</li>
                        <li>High blood pressure risk</li>
                        <li>Heart disease risk</li>
                        <li>Stroke risk</li>
                        <li>Risk of certain cancers</li>
                    </ul>
                );
            }

            return (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">BMI Result</h2>
                    <p className="text-lg">BMI: {bmiResult.bmi.toFixed(2)} - {bmiStage}</p>
                    {bmiDescription}
                </div>
            );

            
        } else {
            return <p className="text-lg text-gray-700 mt-6">Loading BMI data...</p>;
        }


        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-beige-100 to-beige-300">
            <div className="max-w-lg w-full mt-10 p-8 bg-pink-100 rounded-lg shadow-md">
                {renderBmiResult()}
            </div>
        </div>
    );
};

export default ShowBmi;
