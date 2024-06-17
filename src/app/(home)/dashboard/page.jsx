"use client";
import BarChart from "@/components/Charts/BarChart";
import DataStats from "@/components/DataStats";
import LatestArticleCard from "@/components/LatestArtilceCard";
import { useGetDashboard } from "@/hooks/useDashboard";
import { useGetToken } from "@/hooks/useToken";
import React from "react";
import { GrArticle, GrGroup, GrUserAdmin } from "react-icons/gr";

export default function Dashboard() {
  const token = useGetToken();

  const { data, isLoading } = useGetDashboard(token);

  const stats = [
    {
      label: "Total Users",
      value: data?.data?.data?.totalUserCount,
      icon: (
        <p className="text-3xl text-[#10B981]">
          <GrGroup />
        </p>
      ),
    },
    {
      label: "Total Articles",
      value: data?.data?.data?.totalArticleCount,
      icon: (
        <p className="text-3xl text-[#3C50E0]">
          <GrArticle />
        </p>
      ),
    },
    {
      label: "Total Admins",
      value: data?.data?.data?.totalAdminCount,
      icon: (
        <p className="text-3xl text-[#F0950C]">
          <GrUserAdmin />
        </p>
      ),
    },
  ];

  return (
    <React.Fragment>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-medium">Welcome, Admin!</p>
          <h2 className="mb-1.5 text-title-md2 font-bold text-black dark:text-white">
            Dashboard
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
        {stats.map((stat, index) => (
          <DataStats
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <BarChart articlesPerMonth={data?.data?.data?.articlesPerMonth} />
        <LatestArticleCard articles={data?.data?.data?.latestArticle} />
      </div>
    </React.Fragment>
  );
}
