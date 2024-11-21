import React, { useState, useEffect } from "react";
import { Box, Typography, Select, MenuItem, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import axios from "axios";

const PrayerTimes = () => {
  const [region, setRegion] = useState("Toshkent");
  const [prayerTimes, setPrayerTimes] = useState({});

  const regions = [
    "Toshkent", "Andijon", "Buxoro", "Farg‘ona", "Jizzax", "Qashqadaryo",
    "Qoraqalpog‘iston", "Navoiy", "Namangan", "Samarqand", "Surxondaryo", "Sirdaryo", "Xorazm"
  ];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${region}&country=Uzbekistan&method=2`
        );
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, [region]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {region} shahri uchun namoz vaqtlari
      </Typography>
      <Select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        sx={{ mb: 4 }}
      >
        {regions.map((reg) => (
          <MenuItem key={reg} value={reg}>
            {reg}
          </MenuItem>
        ))}
      </Select>
      {prayerTimes && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Namoz</TableCell>
              <TableCell>Vaqti</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(prayerTimes).map(([name, time]) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell>{time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default PrayerTimes;
