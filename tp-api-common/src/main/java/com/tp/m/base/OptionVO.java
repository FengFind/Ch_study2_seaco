package com.tp.m.base;

import java.io.Serializable;

public class OptionVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4168404072810637693L;

	private String id;
	private String name;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}