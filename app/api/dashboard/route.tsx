import { NextRequest, NextResponse } from "next/server";

const githubData = async () => {
  const res = await fetch("https://api.github.com/users/aad05");
  return await res.json();
};

const telegramData = async () => {
  const res = await fetch(
    "https://api.telegram.org/bot1716550083:AAH-yrjN9BAiHPWaT9HcynE8pgECY-eCw_E/getChatMembersCount?chat_id=@asadbek_abduvoitov"
  );
  return await res.json();
};

export async function GET(req: NextRequest) {
  const github = await githubData();
  const telegram = await telegramData();

  return NextResponse.json({
    github: github.followers,
    telegram: telegram.result,
  });
}
