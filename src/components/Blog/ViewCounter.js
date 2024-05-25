"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

const supabase = createClientComponentClient();

console.log({ supabase });

export const ViewCounter = ({slug, noCount=false, showCount=true}) => {
	const [views, setViews] = useState(0);

	useEffect(() => {
		const incrementView = async () => {
			try {
				let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
				if (error){
					console.error("Error incrementing view count inside try block:", error);
				}
			}catch(error){
				console.error("An error occured while incremnting the view count", error)
			}
		}
		if(!noCount){
			incrementView();
		}
	}, [slug, noCount])

	useEffect(() => {
		const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();
        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error
          );
        }
				console.log({ data });
        setViews(data ? data?.count : 0)
      } catch (error) {
        console.error(
          "An error occured while incremnting the view count",
          error
        );
      }
    };
    getViews();
	},[slug])
	
	console.log({ views });

	if(showCount) {
		return (
			<div suppressHydrationWarning={true}>{views} views</div>
		)
	}else{
		return null
	}
}
