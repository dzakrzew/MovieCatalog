package com.rms.moviecatalog.requestobject;

import java.util.List;

public interface RequestObjectInterface {
    public boolean isValid();
    public List<String> getErrors();
}
