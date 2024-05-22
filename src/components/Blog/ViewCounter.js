"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const supabase = createClientComponentClient();

export const ViewCounter = ({slug, noCount=false, showCount=true}) => {
	const [views, setViews] = useState(0);

	useEffect(() => {
		const incrementView = async () => {
			try {
				let { error } = await supabase
					.rpc('increment', {
						slug_text
					})
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
        let { data: views, error } = await supabase
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
	
	if(showCount) {
		return (
			<div>{views} views</div>
		)
	}else{
		return null
	}
}
