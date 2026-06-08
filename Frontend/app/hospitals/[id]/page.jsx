"use client";

import { useParams } from "next/navigation";

export default function HospitalDetails() {
const { id } = useParams();

const hospitals = [
{ id: "st-haldwani", name: "Sushila Tiwari Hospital", city: "Haldwani", phone: "9990002222" },
{ id: "krishna-haldwani", name: "Krishna Hospital", city: "Haldwani", phone: "9990003333" },
{ id: "city-haldwani", name: "City Hospital", city: "Haldwani", phone: "9990005555" },
{ id: "bhimtal-hospital", name: "Bhimtal Hospital", city: "Bhimtal", phone: "8880001111" },
{ id: "bd-pandey", name: "B.D. Pandey Hospital", city: "Nainital", phone: "7770001111" }
];

const hospital = hospitals.find((h) => h.id === id);

if (!hospital) return <p style={{ padding: 40 }}>Hospital not found</p>;

return (
<div style={{ padding: "40px" }}> <h1>{hospital.name}</h1> <p>City: {hospital.city}</p> <p>Phone: {hospital.phone}</p> </div>
);
}

