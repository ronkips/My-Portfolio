import Link from "next/link";
import Image from "next/image";
import { FadeContainer, popUp } from "@context/FramerMotionVariants";
import { navigationRoutes } from "@utils/utils";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import { HiOutlineQrcode } from "react-icons/hi";
import useSWR from "swr";

import fetcher from "@lib/fetcher";
import socialMedia from "../content/"